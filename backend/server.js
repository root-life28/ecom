import  express  from "express";
import productRoutes from '../backend/routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv'
dotenv.config()

import connectDB from "./config/db.js";

const port=process.env.PORT;
connectDB();
const app=express();

app.get('/',(req,res)=>{
    res.send('Api is running...');
})

app.use('/api/products',productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`server running on port ${port}`));