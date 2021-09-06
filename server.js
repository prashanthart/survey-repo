const exp = require("express");
const app = exp();
const path = require("path");

const mc = require("mongodb").MongoClient;
app.use(exp.static(path.join(__dirname,"dist/survey")));
const dburl = "mongodb+srv://prashanth:prashanth@test.k28t2.mongodb.net/prashanthdb3?retryWrites=true&w=majority";
let dbobj;
mc.connect(dburl,(err,client)=>{
    if(err){
        console.log("error in db connection",err);
    }
    else{
        dbobj = client.db("prashanthdb3");
        app.locals.databaseObject=dbobj;
        console.log("connected to db");
    }
})

const userApiRoute = require("./surveyApi/user");

app.use("/user",userApiRoute);

const port = 5000;
app.listen(port,()=>console.log(`server on port ${port}`));