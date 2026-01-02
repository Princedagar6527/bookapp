import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoutes from "./routes/book.route.js";
import cors from "cors"
import userRoute from './routes/user.route.js'

// Load environment variables first
dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  credentials: false
}));

// Parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// MongoDB connection with proper async/await
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

connectDB();

// Routes

// Root route
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
app.use("/users", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
