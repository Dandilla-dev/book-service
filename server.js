import express from 'express';
import bookRoutes from './routes/routes.js';
import errorHandler from './middlewares/error.middleware.js';
import {dbConnection} from "./config/database.js";

const app = express();

app.use(express.json());
app.use(bookRoutes);

app.use(errorHandler);
app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not found')
);

async function startServer() {
    await dbConnection();
    app.listen(process.env.PORT || 8080, () => console.log(`Server started on ${process.env.PORT || 8080}. Press Ctrl+C to stop.`));
}

startServer()