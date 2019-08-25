const mongoose = require('mongoose');

const OperatorSchema = new mongoose.Schema({
    uuid: {
        type: String,
        require: true
    },
    connectionTime: {
        type: Number,
        require: true
    },
    currentStatus: {
        type: String,
        default: 'free'
    },
    nick: {
        type: String,
        default: 'Operator'
    },
    _type: {
        type: String,
        default: 'client'
    },
    _statuses: {
        type: Array,
        default: ["in conversation", "free"]
    },
    online: {
        type: Boolean,
        default: true
    }

});

export const OperatorModel = mongoose.model('Operators', OperatorSchema);