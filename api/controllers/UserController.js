const User = require("../models/User");
const bcryptjs=require("bcryptjs")



const Login = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            return res.json({ message: "all inputs must be feiled" });
        }
    
        const user=await User.findOne({email})
        if (!user) {
            return res.json({ message: "user not exist" });
        }
    
        // check password
        const coreccte=await  bcryptjs.compare(password,user.password)
        if (!coreccte) {
            return res.json({ message: "password not correct" });
        }


        res.status(200).json({userId:user._id});
    } catch (error) {
        res.json({message:error.message});
    }
 

}





const Register = async (req, res) => {
    const { fullname, email, mobile, password } = req.body
    if (!fullname || !email || !mobile || !password) {
        return res.json({ message: "all inputs must be feiled" });
    }

    // check user if exist or no
    const existemail = await User.findOne({ email: email })
    const existMobile = await User.findOne({ mobile: mobile })

    if (existemail || existMobile) {
        return res.json({ message: "email or mobile is already used" });
    }

    const salt= await bcryptjs.genSalt(10);
    const hash=await bcryptjs.hash(password,salt)


    const user = new User({
        fullname:fullname,email: email, mobile: mobile, password: hash
    })
    await user.save()
    res.json({ message: "create user" });
}

module.exports = { Login, Register }
