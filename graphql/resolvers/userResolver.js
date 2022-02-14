const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../../models/userModel");



module.exports = {
    users: async () => {
        try {
            const users = await UserModel.find({});
            return users
        } catch (error) {
            throw new Error('Something went wrong! Please try again')
        }
    },
    makeAdmin: async args => {
        const { name, email, password, role } = args.input;

        const user = new UserModel({
            name: name,
            email: email,
            password: password,
            role: role
        })
        try {
            const isExisting = await UserModel.find({ email: email });
            if (!isExisting[0]) {
                const users = await user.save();
                return users
            } else {
                throw new Error('This email already registered!')
            }
        } catch (error) {
            throw new Error('Something wrong with creating user!');
        };
    },
    findUser: async args => {
        const { email, password } = args.input;

        try {
            const user = await UserModel.findOne({ email: email });
            const validPassword = await bcrypt.compare(password, user.password);


            if (user && validPassword) {
                const token = await jwt.sign({
                    name: user.name, 
                     email: user.email
                }, process.env.SECRET_TOKEN, {
                    expiresIn: '1h'
                })
                return {token}
            } else {
                throw new Error('Credential not valid!')
            }
        } catch (error) {
            throw new Error('Something went wrong with finding user!')
        }
    }
};