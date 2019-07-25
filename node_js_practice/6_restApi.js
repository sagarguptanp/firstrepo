const http = require("express");
const express = new http();
let fs = require("fs");

    express.get("/show-user-details",(req , response) => {
        let obj = fs.readFile("./package.json",(err , data) =>{
            if(err){
                throw err;
            }else{
                console.log(data);
                response.end(data);
            }
        });
    }) ;

    express.post("/add-user-details",(req , response) => {
        console.log("inside the outerfunction");
        let obj = fs.readFile("./package.json",function(err,data){
            console.log(data);
                let objTemp = fs.writeFileSync("./user.json",data);
                response.end("Successfully add ");
        
        });
            
                
        // let obj = fs.readFileSync("./package.json");
            
        //         console.log(obj);
        //         let objTemp = fs.writeFileSync("./user.json",obj);
        //         response.end("Successfully add ");
    }) ;


    //add-user-details-by-user-input?id=1&name=sagar
    express.post("/add-user-details-by-user-input",(req , response) => {
        console.log("inside the outerfunction");
        console.log(req.param("id"));
        console.log(req.param("name"));
        
        response.end("Successfully add ");
    });

        //add-user-details-by-user-input?sagar

    express.get("/add-user-details-by-user-input-get/:name",(req , response) => {
        console.log("inside the outerfunction");
        //console.log(req.param("id"));
        console.log(req.params.name);
        
        response.end("Successfully add ");
    });
    express.listen(8080);
   
