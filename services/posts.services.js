const mongo = require('../mongo');
//const {ObjectId} = require('mongodb');
const service = {
    getposts() {
     return mongo.db.collection('testMe').find().toArray();
    },
    createposts(data) {
     return mongo.db.collection('testMe').insert(data);
    },
    update(nameid,data){
     return mongo.db.collection('testMe').findOneAndUpdate({name:nameid},{$set:data},{returnDocument: "after"});
    },
    delete(nameid) {
     return mongo.db.collection('testMe').remove({name:nameid});
    }
}
module.exports = service;