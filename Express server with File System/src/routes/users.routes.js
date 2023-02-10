const express = require("express");
const {
    getAllUsers,
    getUserById,
    validateUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controllers");

const router = express.Router();
router.route("").get(getAllUsers).post(validateUser,createUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;