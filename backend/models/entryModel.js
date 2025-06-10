import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    userId: {type:String,required:true},
    description: {type:String,required:true},
    credit: {type:Number,required:true},
    debit: {type:Number,required:true},
    date: {type:Date,default: Date.now()},
})

const entryModel = mongoose.models.entry || mongoose.model('entry',entrySchema)

export default entryModel;