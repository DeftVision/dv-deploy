const userModel = require('../models/userModel')

exports.newUser = async (req, res) => {
    try {
        const {firstName, lastName} = req.body;
        if (!firstName || !lastName) {
            return res.status(400).send({
                message: "All fields required",
            })
        }

        const user = new userModel({firstName, lastName });
        await user.save();
        return res.status(200).send({
            message: "User saved successfully",
            user,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: 'Error saving user',
            error: error,
        })
    }
}


exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        if (!users) {
            return res.status(400).send({
                message: "No users found"
            })
        }
        if (users) {
            return res.status(200).send({
                user_count: users.length,
                users,
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Error getting all users',
            error: error,
        })
    }
}