import {cond} from "./usefulFunctions";
import {ClientModel} from "./models/ClientModel";
import {OperatorModel} from "./models/OperatorModel";

const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/users";

export function mongoConnect() {
    return new Promise((res, rej) => {
        mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFineAndModify: true,
        })
            .then(() => {
                cond('Mongo connected');
                [ClientModel, OperatorModel].forEach(collection => {
                    // collection.findAndModify({online : true}, (err, users) => {
                    //     users.forEach(user => {
                    //         user.online = false;
                    //     });
                    //     users.save(err => {
                    //         if (err) cond(err);
                    //     });
                        collection.updateMany({online : true}, {online : false}).exec();
                });
            })
            .catch(err => {
                console.log(err);
                rej(err)
            });
        // mongoose.set('useFineAndModify', false);
        res();
    });
}

