/* ----- Packages Imports ----- */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

/* ----- Middlewares Imports ----- */
const notFoundMiddleware = require('./middlewares/notFound.middleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

/* ----- App Initialization ----- */
const app = express();
dotenv.config();

/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());
app.use('/public', express.static('./public'));

/* ----- Routes Imports ----- */
const plantsRoutes = require('./routes/plants.routes');
const ordersRoutes = require('./routes/orders.routes');
const authRoutes = require('./routes/auth.routes');

/* ----- Routes User ----- */
app.use(plantsRoutes);
app.use(ordersRoutes);
app.use(authRoutes);

/* ----- Error Middlewares ----- */
app.use(notFoundMiddleware);
app.use(errorMiddleware);

/* ----- Start Function ----- */
const bootstrap = async() => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`);
        app.listen(process.env.APP_PORT, () => console.log(`Server started on: http://127.0.0.1:${process.env.APP_PORT}`));
    }
    catch (err) {
        console.log("Failed to start the server");
    }
};

bootstrap();