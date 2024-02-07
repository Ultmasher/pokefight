import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// import pokemon from "./routes/pokemonRouter.js";


dotenv.config();
const app = express();
const port = 8000;
const router = require('./pokemonRouter');
// const pokemonRouter = require('./routes/pokemonRouter');

app.use(cors());
app.use('/', router);
app.use(express.json());
// app.use('/pokemon', pokemonRouter);

//define route for req and / is the root path
//then we fire handler function when get request
//and send response to client
app.get('/', (req, res) => {
    res.send('Pokemon Fighter');
});


//start server by calling listen
app.listen(port, () => {
   console.log(`Recipes app is running at http://localhost:${port}`) 
});