const {Schema, model, default: mongoose} = require ('mongoose');

const saleSchema = new Schema({
    date:{
        type: Date,
    },
    quantity:{
        type: Number,
        required: true
    },
    typeSale:{
        type: String,
    },
    total:{
        type: Number,
        required: true
    },
    nameClient:{
        type: String
    },
    numberClient:{
        type: Number
    },
});

module.exports = model ("Sale", saleSchema);