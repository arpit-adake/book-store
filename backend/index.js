import express from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

// Middleware
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:5173', // Or whatever port your frontend is on
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // <-- Make sure 'DELETE' is in this array
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.get('/', (request,response) => {
  console.log(request)
  return response.status(234).send("Welcome to the Library")
});

app.use('/books',booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to the database')
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error)
  })