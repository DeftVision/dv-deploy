// db.js
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultDB';

        console.log(`Connecting to MongoDB at: ${dbUri}`);

        // Connect to MongoDB
        await mongoose.connect(dbUri);

        console.log(`MongoDB connected successfully to host: ${mongoose.connection.host}`);
    } catch (err) {
        console.error(`MongoDB connection error: ${err.message}`);
        process.exit(1); // Exit the process on connection failure
    }
};

// MongoDB Connection Events for Better Debugging
mongoose.connection.on('connected', () => {
    console.log('MongoDB event: connected');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB event: error - ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB event: disconnected');
});

mongoose.connection.on('reconnected', () => {
    console.log('MongoDB event: reconnected');
});

mongoose.connection.on('close', () => {
    console.log('MongoDB event: connection closed');
});

module.exports = connectDB;
