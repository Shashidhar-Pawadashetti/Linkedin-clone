import mongoose from "mongoose";

const connectionRequest = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    connectionID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status_accepted:{
        type:Boolean,
        default: null
    }
});

const ConnectionRequest = mongoose.model("Connection",connectionRequest);

export default ConnectionRequest;