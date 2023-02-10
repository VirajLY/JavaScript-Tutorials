const fs = require("fs");
const sendResponse = require("../sendResponse/sendResponse");
const sendErrorResponse = require("../sendErrorResponse/sendErrorResponse")
const AppError = require("../AppError/AppError")

class FileHandling {
    constructor(user,req,res){
        this.user = user;
        this.req = req;
        this.res = res;
    }
    writeFile(path,data){
        fs.writeFile(path, data, (err) =>{
            if(err){
                sendErrorResponse(new AppError({message:"Internal Error with writing file ", statusCode:404}), this.req, this.res);
            }
            else{
                sendResponse(this.req, this.res, {
                    statusCode:201,
                    message:"Successful",
                    payload:this.user
                });
            }
        })

    }
}

module.exports = FileHandling;