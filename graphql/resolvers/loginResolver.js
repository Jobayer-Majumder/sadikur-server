const loginModel = require("../../models/loginModel")


module.exports = {
    users: async () => {
        try {
            const users = await loginModel.find()

            return users

        } catch (error) {
            throw new Error('Authentication failed! Please try again')
        }
    },
    addUser: async args => {
        const {name, email, password, role} = args.input;
        const user = new loginModel({
            name: name,
            email: email,
            password: password,
            role: role
        })
        try {
            const users = await user.save();
            return users
        } catch (error) {
            throw new Error('Something went wrong with creating user!');
        }
    },
    findUser: async args => {
        const {email, password} = args.input;

        try {
            const user = await loginModel.findOne({email: email, password: password});
            if(user){
                return user
            }else{
                throw new Error('Credential not valid!')
            }
        } catch (error) {
            throw new Error('Something went wrong with finding user!')
        }
    }
}