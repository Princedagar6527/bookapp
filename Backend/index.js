
import express from 'express'
const app=express();
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoutes from "./routes/book.route.js";
import cors from "cors"
import userRoute from './routes/user.route.js'

app.use(cors({
  origin: ['https://bookapp-frontend.onrender.com', 'http://localhost:5173']
}));

app.use(express.json())
dotenv.config();
const PORT=process.env.PORT||4000;
const URI=process.env.MONGODBURI;


//mongodb connection
try {
     mongoose.connect(URI)
      console.log("Connected to mongoDB"); 
    } catch (error) { 
        console.log("Error: ", error); 
    }


//routes

// Root route - Add this
app.get('/', (req, res) => {
  res.json({ 
    message: "Book My App API is running successfully!", 
    status: "active",
    endpoints: {
      books: "/books",
      users: "/users"
    }
  });
});

app.use("/books", bookRoutes);
app.use("/users",userRoute);


app.listen(PORT,()=>{
    console.log(`the port start listening at ${PORT}`);
})
