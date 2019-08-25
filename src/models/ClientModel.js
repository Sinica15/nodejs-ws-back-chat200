const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
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
        default: 'Client'
    },
    _type: {
        type: String,
        default: 'client'
    },
    messageHistory: {
        type: Array,
        default: []
    },
    serviceMsgsHistory: {
        type: Array,
        default: []
    },
    unreadMsgs: {
        type: Number,
        default: 0
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

export const ClientModel = mongoose.model('Clients', ClientSchema);