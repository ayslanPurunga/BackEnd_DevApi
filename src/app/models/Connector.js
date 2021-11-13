const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConnectorSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    privacy:{
        type: String,
        required:true
    },
    baseUrl:{
        type: String,
        required:true
    },
    logoUrl:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    status:{
        type: String,
        required:true
    },
        token: String,
        expiration: String        
},{
    timestamps:true,
});

export default model('Connector', ConnectorSchema);