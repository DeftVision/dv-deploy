require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const connectDB = require('./config/db');
connectDB();

const userRoutes = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/user', userRoutes);


app.listen(port, () => console.log(`Listening on port ${port}`));