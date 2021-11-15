import mongoose, { Schema } from 'mongoose';

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
        type: Boolean,
        required:true,
        default:true
    },
    deleted_at:{
        type: Date,
    },
});

export default mongoose.model('Connector', ConnectorSchema);