const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Connects to MongoDB and seeds the DB if needed.
 */
async function connectToMongo() {
    if (!process.env.MONGO_URI) {
        console.error('❌ MONGO_URI is not defined');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB');

        const count = await Message.countDocuments();
        if (count === 0) {
            await Message.create({ text: 'Hello from MongoDB!' });
        }
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err);
    }
}

// API route to get all messages
app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

if (process.env.NODE_ENV !== 'test') {
    connectToMongo();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server listening on port ${PORT}`);
    });
}

module.exports = { app, connectToMongo };
