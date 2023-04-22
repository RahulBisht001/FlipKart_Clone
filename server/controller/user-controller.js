import User from '../model/user-schema.js'

export const userSignup = async (req, res) => {

    try {
        if (!req.body) {
            res.status(400).json({
                message: "Request Body is Empty"
            })
        }


        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            return res.status(401).json({ message: 'User already exist' });
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ data: user });
    } catch (err) {
        console.log("Error in userController -> userSignup")
        console.log(err)
    }
}


export const userLogin = async (req, res) => {

    try {

        const { username, password } = req.body
        let user = await User.findOne({
            username: username,
            password: password
        })

        if (user) {
            return res.status(200).json({ data: user })
        }
        else {
            return res.status(401).json("Invalid Login")
        }

    } catch (err) {
        console.log("Error in userController -> userLogin")
        console.log(err)
    }
}