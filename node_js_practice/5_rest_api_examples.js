let validator = require('../javascript/practice/54_stack.js');
let fs = require("fs");
// let express = require('express');
let http = require('http');
let url = require('url');

// app = new express();

// app.post("/show-user-details",function(req,res){
//     let data = req.param("data");
//     console.log(data);
//     let valid = new validator(data);
//     console.log(valid);
//     let index = valid.validateData();
//     console.log( index !== -1 ? "String is not balanced. "+index.data+" is missplaced. Invalid at postion "+ index.index +" " : "String is balanced");
//     res.end(index !== -1 ? "String is not balanced. "+index.data+" is missplaced. Invalid at postion "+ index.index +" " : "String is balanced");
// });



// app.listen(8081);

const port = 8080;
const host = "localhost";

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.data);
    let urlDetails =url.parse(req.url,true);
    console.log(urlDetails.pathname);
    if(urlDetails.pathname === "/" && req.method === "GET"){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end(req);
    }else if(urlDetails.pathname === "/login-page" && req.method === "POST"){
        console.log(urlDetails.query.name);
        console.log(urlDetails.query.password);
        let body = '';
        req.on('data', chunk => {
            body += chunk; // convert Buffer to string
        }).on("end",()=>{
            console.log("inside on method"+body);
            let obj = JSON.parse(body);
            if(!(obj.userName && obj.password)) {
                res.statusCode=400;
                res.end('{"success":true , "message" : "Either username or password is missing"}');
            }
            let data = JSON.parse(fs.readFileSync('./user.json'));
            let isValid = false;
            for(let tempData of data){
                console.log(tempData.name + " password:- " + tempData.password);
                isValid = (tempData.name === obj.userName && tempData.password === obj.password) ?  false :  true;
                if(!isValid){
                    res.statusCode=200 ;
                    res.end('{"success": true, "message": "Login Successful"}"') ;
                }
            }
        res.statusCode=401;
        res.end('{"success": true, "message": "Invalid Credentials"}') ;
            
        });
        
        // function call which handles data querying from DB.
    }else if(urlDetails.pathname === "/register-page" && req.method === "POST"){
        if(!(urlDetails.query.name && urlDetails.query.password)) {
            res.statusCode=400;
            res.end('{"success":true , "message" : "Either username or password is missing"}');
        }
        console.log(urlDetails.query.name);
        console.log(urlDetails.query.password);

        let fileData = fs.readFileSync('user.json');

        let arr ;              
        if(fileData.length !== 0){
            fileData = JSON.parse(fileData);
            arr = fileData;
        }else{
            arr = new Array();
        }
        let isValid = true;
        for(let tempData of arr){
            console.log(tempData.name + " password:- " + tempData.password);
            isValid = (tempData.name === urlDetails.query.name && tempData.password === urlDetails.query.password) ?  false :  true;
            if(!isValid){
                res.statusCode=401 ;
                res.end('{"success": true, "message": "User is already exist"}"') ;
            }
        }
        console.log("is Valid request:-"+isValid);
        if(isValid){
            arr.push(urlDetails.query);
            fs.writeFileSync('user.json',JSON.stringify(arr));
            res.statusCode=200;
            res.end('{"sucess":"true","message":"User Added Successfully"}');  

        }
        
                 
    }else if(urlDetails.pathname){
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end('404 page not found\n');
    }

});

server.listen(port,host,()=>{
    console.log(`Serving running at http://${host}:${port}/`);
});