const { Schema, model } = require("mongoose");

const capSchema = Schema({
    brand:{
        type: 'String',
    },
    price:{
        type: Number,
        required: true,
    }
});

module.exports = model ("Cap", capSchema);

