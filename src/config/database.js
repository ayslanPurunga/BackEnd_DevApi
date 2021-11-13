const mongoose = require('mongoose');

class Database {
    constructor() {
        this.init()
    }

    init() {
        mongoose.connect('mongodb://localhost:27017/connectors',
            {useNewUrlParser:true, useUnifiedTopology:true}
            )
    }
}

module.export = new Database();