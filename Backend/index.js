import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import { User } from './models/user.models.js'

const app = express()
app.use(express.json())
app.use(cors())

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://abdulahadera:qR7wzldx0ahad@cluster0.dh823jd.mongodb.net/register-user")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
connectDB()

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful!' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });

    await newUser.save();

    // Respond with a success message
    res.json({ message: 'User registered successfully!' });

});

app.listen(3000, () => {
    console.log(`server is running on port on 3000`)
})