import express from 'express';
import { prisma } from '@mci/database';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import dotenv from 'dotenv';
import path from 'path';
import { authMiddleware } from './middleware/auth';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

async function startServer() {
    const app = express();
    const port = process.env.PORT || 4000;

    app.use(cors());
    app.use(express.json());

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    app.use(authMiddleware);

    // Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => ({
            user: (req as any).user,
            prisma
        })
    }));

    app.get('/health', (req, res) => {
        res.json({ status: 'ok' });
    });

    app.listen(port, () => {
        console.log(`🚀 Query API ready at http://localhost:${port}/graphql`);
    });
}

startServer().catch(console.error);
