const express = require('express');
const app = express();
//importing mongo db
// const {MongoClient} = require('mongodb');
//imposrting routes
const postsRoute = require('./route/posts');
const cors = require('cors');
// const url = 'mongodb://localhost:27017';
// const dbName = 'test';
const mongo = require('./mongo');
async function loadApp() {
    try {
        await mongo.connect();
    //mongo connection
// const client = new MongoClient(url);
// await client.connect();
// console.log("connected to mongodb");
// //db will be used for query.
// const db = client.db(dbName);

// const results = await db.collection('testMe').find().toArray();
// console.log(results);
//middlewares
app.use(express.json()); //middleware, to parse coming data
app.use(cors());
//app.use(("/posts",req,res,next)=> : based on route
app.use((req,res,next)=>{
    console.log("guvi");
    if(req.method !== "DELETE") {
        next();//this is middleware, to return reponse, without next, it will get stuck for response.
    }
    else {
        res.send("Not allowed to delete");
    }
    })
//routes
app.use('/api',postsRoute);
//starting server
app.listen(3001,()=>
console.log("server is starting"));
    }
    catch(err) {
        console.log(err);
        //to exit from app after error.
        process.exit();
    }
}
loadApp();