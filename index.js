// console.log('hello world');

// const http = require('http');
// const fs = require('fs');

// const input = process.argv;

// if (input[2]=='add') {
// 	fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
// 	fs.unlinkSync(input[3])
// }
// else{
// 	console.log("invalid input");
// }


// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application/json'});
// resp.write(JSON.stringify({name:"Pawan joshi",email:"test1@gmail.com"}));
// resp.end();
// }).listen(5001);

// create multiple file under folder through command
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'file');
// console.log(dirpath);

// loop through created file
// for(i=0;i<=5;i++){
// 	let create = fs.writeFileSync(dirpath+"/newfile"+i+".txt",'this is node js project welocome');
// 	console.log(`created${i}`);
// }


// file read through directory

// fs.readdir(dirpath,(err,file)=>{
// 	// print array form
// 	// console.log(file)

// 	file.forEach((item)=>{
// 		console.log(item);
// 	});

// });


// crud with file system 
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname,'crud');
// const filepath = `${dirpath}/newdatafile.txt`;

// create file
// fs.writeFileSync(filepath,"This is node js project . welocome to my project");

// read file
// fs.readFile(filepath,'utf8',(err,item)=>{
// 	console.log(item);
// })

// updated file
// fs.appendFile(filepath," new project add and new text added 1",(err)=>{
// 	if (!err) { console.log('file created successfully'); }
// });

// remane file name
// fs.rename(filepath,`${dirpath}/newdatafile.txt`,(err)=>{
// 	if (!err) { console.log("file name updated"); }
// })

// delete file
// fs.unlinkSync(`${dirpath}/newdatafile.txt`,(err)=>{
// 	if (!err) { console.log("file delete successfully"); }
// });

// what is buffer
// buffer means temparary memory. node js shall a little small memory operation perform.


// asynchronous basic node js

// console.log("start execute");

// setTimeout(()=>{
// 	console.log("second execute");
// },2000);

// console.log("third execute");

// drawback of asynchronous language
// let a = 10;
// let b = 20;

// setTimeout(()=>{
// 	b=100;
// },2000);

// console.log(a+b);

// handle asynchronous data
// let a = 10;
// let b = 20;

// promise
// resolve means data work completed and reject count just like error

// let writingData = new Promise((resolve,reject)=>{
// setTimeout(()=>{
// // b=100;
// resolve(100);
// },2000);
// });

// writingData.then((resp)=>{
// b=resp;
// console.log(a+b);
// });

// how node js works

// express js
// const express = require('express');
// const app = express();

// app.get('',(request,response)=>{
// response.send("Hello , this is home page");
// });

// app.get('/about',(request,response)=>{
// response.send("Hello , this is About page");
// });

// app.get('/help',(request,response)=>{
//     response.send("Hello , this is Help page");
// });

// app.listen(4001);
