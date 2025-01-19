require ('dotenv').config();
require('express-async-errors');
const express =  require('express');
const app = express();

//rest of the package
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;




// DATABASE
const connectDB = require('./db/connect');

// routers

const authRouter = require('./routes/authRoutes')

// MIDDLEWARE

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

app.get('/', (req, res) => {
    res.send('e-commerce')
})
app.get('/api/v1', (req, res) => {
    console.log(req.signedCookies)
    res.send('e-commerce')
})

app.use('/api/v1/auth/', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URI);
        app.listen(port, () => { 
            console.log(`App is running on port ${port}...`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

start();
