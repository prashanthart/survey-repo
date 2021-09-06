const exp = require("express");
const userApiRoute = exp.Router();
userApiRoute.use(exp.json());

// userApiRoute.get("/getdata",(req,res)=>{
//     let dbobj = req.app.locals.databaseObject;
//     dbobj.collection("food_collections").find().toArray((err,userArray)=>{
//         if(err){
//             console.log("err in reading data",err);
//         }
//         else{
//             res.send({message:userArray});
//         }
//     })
//     // console.log("this is userdata",req.body);
// });

userApiRoute.post("/upload",(req,res)=>{
    let dbobj = req.app.locals.databaseObject;
    dbobj.collection("food_collections").insertOne(req.body,(err,success)=>{
        if(err){
            console.log("error in inserting db",err);
            res.send({message:"failed"})
        }
        else{
            console.log("successfully inserted");
            res.send({message:"success"});
            // res.send({message:"inserted into db"})
        }

    })
    console.log("this is userdata",req.body);
})

// userApiRoute.post("/upload",(req,res)=>{
    
// })


module.exports = userApiRoute;