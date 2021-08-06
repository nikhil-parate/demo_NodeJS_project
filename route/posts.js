const express = require('express');
const router = express.Router();
const postservice = require("../services/posts.services");
// posts = [
//     {
//        name: "nikhil",
//        city: "jbp"
//     },
//     {name: "parate",
//     city: "kar"

//     }
// ]
 router.get("/posts",async (req,res)=>{
    //console.log(mongo.connect.collection) ;
    const posts = await postservice.getposts();
   // console.log(mongo.db.collection('testMe'));
     res.send(posts);
 });
// router.get("/search",(req,res)=>{  //http://localhost:3001/search?name=nikhil,city=lalla
//     res.send(req.query);
// });
router.post('/posts',async (req,res)=>{
    console.log(req.body);
    const posts = await postservice.createposts(req.body);
    res.send(posts);
   // res.send({...req.body, name: "nknk",city:"ll"});
})
router.put('/posts/:name/:city',async (req,res)=>{
    const posts = await postservice.update(req.params.name,req.body); 
    res.send(posts);
    // res.send({...req.body, ...req.params})
})
router.delete('/posts/:name',async (req,res)=>{
    const posts = await postservice.delete("Nikhil");
    res.send(posts);
    // res.send({});
})
module.exports = router;