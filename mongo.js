const {MongoClient} = require('mongodb');
require('dotenv').config();
const url = process.env.MONGODB_URL;//'mongodb://localhost:27017';// //;//'mongodb+srv://nikhil:nikhil123@cluster0.xhgow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = 'test';
const client = new MongoClient(url);
const mongo = {
    db: null,
    async connect () {
await client.connect();
console.log("connected to mongodb");
//db will be used for query.
this.db = client.db(dbName);
console.log(this.db);
}
}
module.exports = mongo;
