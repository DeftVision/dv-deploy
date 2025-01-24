// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Use the correct environment variable for the production database URI
        const dbUri = process.env.DATABASE_URI || 'mongodb://localhost:27017/defaultDB';

        // Connect to MongoDB
        const conn = await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB connection error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
