import express from 'express';
import bookRoutes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(bookRoutes);

app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not found')
);

//TODO server logic

startServer()