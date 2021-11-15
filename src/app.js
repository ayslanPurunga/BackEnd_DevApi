//import express from 'express';
const express = require('express');
const cors = require('cors');
import '../database';


class App {
    constructor() {
        this.express = express()
        
        this.cors()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }

    cors() {
        this.express.use(cors())
    }
}

export default new App().express;