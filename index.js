// app.js
import express from 'express';

import bodyParser from 'body-parser';
import livreRoutes from './routes/routelivre.js';
import connectDB from './config/db.js'
const app = express();
const PORT = 3000;


// connnecxion BD 
connectDB()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api',livreRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});