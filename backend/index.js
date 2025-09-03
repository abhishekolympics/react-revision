import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB).then(
    () => console.log("✅ MONGODB connected.")).catch(
        (err) => console.error("❌ MongoDB connection error:")
    );


app.use('/',routes);

PORT = 4000
app.listen(PORT,() => { 
    console.log(` 🚀 Server running on Port ${PORT}`)
})