const Users = require("../../project/users.json")
const sendResponse = require("../helpers/sendResponse/sendResponse")
const sendErrorResponse = require("../helpers/sendErrorResponse/sendErrorResponse")
const AppError = require("../helpers/AppError/AppError")
const User = require("../model/User.model")
const fs = require("fs")
const { log } = require("console")
const FileHandling = require("../helpers/FileHandling/FileHandling")

const path = "../project/users.json";
const getAllUsers = (req, res) => {
    sendResponse(req,res,{
        statusCode:200,
        message:"Successfully fetched users",
        payload:[...Users]
    })
}

const getUserById = (req, res) => {
    const {id} = req.params;
    const user = Users.find((user) => user.id === id);
    if(user){
        return sendResponse(req, res, {
            statusCode:200,
            message:"Successfully fetched specified user",
            payload:{...user}
        })
    }
    sendErrorResponse(new AppError({message:"User Not Found", statusCode:400}), req, res);
}

const validateUser = (req, res, next) =>{
    const {body} = req;
    const validKeys = [
        "id",
        "name",
        "profileImage",
        "introduction",
        "profileLink"
    ];
    const result = validKeys.every((key)=> Object.keys(body).includes(key));
    if(!result){
        return sendErrorResponse(new AppError({message:"Invalid request body", statusCode:422}), req, res);
    }
    next();
}

const createUser = (req, res) =>{
    const {body} = req;
    const newUser = new User(body);
    Users.push(newUser);
    let data = JSON.stringify(Users, null, 2);
    const file = new FileHandling(newUser, req, res);
    file.writeFile(path,data);
}

const updateUser = (req, res) =>{
    const {id} = req.params;
    const {body} = req;
    const user = Users.find((user) => user.id === id);
    if(user){
        Object.keys(body).forEach(key =>{
            user[key] = body[key];
        });
        const data =JSON.stringify(Users, null, 2);
        const file = new FileHandling(user, req, res);
        file.writeFile(path,data);
    }
}

const deleteUser = (req, res) =>{
    const {id} = req.params;
    const index = Users.findIndex((element) => element.id === id)
    
    if(index>= 0){ 
        Users.splice(index,1);
        const file = new FileHandling(Users, req, res);
        const data =JSON.stringify(Users, null, 2);
        file.writeFile(path,data);
        return;
    }
    sendErrorResponse(new AppError({message:"User Not Found", statusCode:404}), req, res);
}

module.exports = {
    getAllUsers,
    getUserById,
    validateUser,
    createUser,
    updateUser,
    deleteUser
}