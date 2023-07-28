import express from 'express';
import * as dotenv from  'dotenv';
import cors from 'cors';

import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const app =  express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' })
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

// const startSever = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL);
//     app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
//   } catch (error) {
//     console.log(error);
//   }
// };

connectDB()
  .then(() => {
    app.listen(8080, () => {
        console.log("listening for requests");
    });
  })
  .catch(error => {
    console.log(error);
  });