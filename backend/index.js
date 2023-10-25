const fs = require("fs");

// fs.writeFile("message.txt","its new message",(err)=>{
//     if(err) throw err;
//     console.log("is any error");
// })

fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
