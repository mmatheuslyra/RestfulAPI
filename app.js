var cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser') 

//This app redirect specific routes for the proper files
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev')); //log the operations through the server
app.use(bodyParser.urlencoded({extended: false})); //Receive body requests, the extend iqual to false means that only suport simple bodies
app.use(bodyParser.json());     //The body parser allows the body property inside the requests
app.use(cors());

app.use(express.static("./landingPage/"));

app.get('/',(req, res, next)=>{ //In case of train to access the root adress
    /*res.status(200).json({
        message: 'Adress not valid'
    });*/
    res.sendFile(__dirname+'/landingPage/client.html');
});

app.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Adress not valid'
    });
});

app.use('/products', productRoutes);  // Redirecting the route
app.use('/orders', ordersRoutes); 

//Error handle, if reach this line means that the previous  wasn't enough
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error); // Pass the error to the function bellow
});
 
//handles all kinds of error that may occur in the whole project 
app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({ // general errors will get status 500
        error:{
            message: error.message
        }
    });
});

module.exports = app;