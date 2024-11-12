const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb')

// config dot env file
dotenv.config();

//Database calling
connectDb();

//rest Objects, here i can use all the packages of express with the use of app variable : )
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users', require('./routes/userRoute'))

// transectioons routes
app.use('/api/v1/transections', require('./routes/transectionRoutes'));

//port
const PORT = 8080 || process.env.PORT //either take the default port when called from the given port or take if specified from the env file, technically env will be for the production server and the given port will be for the development server.

//listen server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
