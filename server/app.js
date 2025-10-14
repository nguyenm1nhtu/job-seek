require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const compression = require('compression');
// const { bucket } = require('./config/gcs');

const indexRouter = require('./src/routes/index');
const apiRouterV1 = require('./src/routes/v1/api');
const { notFound, errorHandler } = require('./src/middlewares/error');

const app = express();

// Security + CORS
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(
    cors({
        origin:
            (process.env.CORS_ORIGIN || '')
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean) || true,
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    }),
);

// Logging
app.use(morgan('dev'));

// Parsers & cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Compression
app.use(compression());

// Health & docs
app.get('/healthz', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/', indexRouter);
app.use('/api/v1', apiRouterV1);

// Error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
