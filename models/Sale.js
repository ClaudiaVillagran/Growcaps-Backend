const {Schema, model, default: mongoose} = require ('mongoose');

const saleSchema = new Schema({
    date:{
        type: Date,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    cap:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cap'
    }
});

module.exports = model ("Sale", saleSchema);