const user = require('../models/users');
const bcrypt = require('bcryptjs');
const { mailService } = require("../helper/mail.helper");


// forget password
exports.forgetPassword = async (req, res) => {
    try {

        var val = Math.floor(100000 + Math.random() * 900000).toString();
        console.log("otp_code", val);

        const email = req.body.email

        const data = await user.findOne({ email: email })
                                    
        if (data) {

            // mail content
            let sub = "ForgetPassword details are";
            // let html = `<p> Your otp  is ${val} </p>`;
            let html =`<center><div style="background-color: white;color:black;padding:2%;line-height: 30px;border-radius: 5px; text-align: center;width: 500px; height: 200px; ">
            <p>Hello ${data.email} , <br> We got a request to reset your account password.  Your otp  is <u><b>${val}</b></u> If you ignore this message , your password will not be changed. </p></center>
            `;

            await mailService(data.email, sub, html)

            const otp_save = bcrypt.hashSync(val, bcrypt.genSaltSync(8), null)

            const update_db = await user.findByIdAndUpdate({ _id: data._id }, {
                $set: {
                    otp_code: otp_save
                }
            }, {
                new: true,
                useFindAndModify: false
            })

            res.status(200).json({
                message: "Your otp code send in your email",
                status: 200,
            })


        } else {
            res.status(404).json({
                message: "User data not found",
                status: 404
            })
        }

    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}


// verifyOtp  -> otp
exports.verifyOtp = async (req, res) => {
    try {
        const data = await user.findOne({ email: req.params.email })

        if (data) {

            const otp_code = data.otp_code

            const code = req.body.otp_code

            bcrypt.compare(code, otp_code, async (err, result) => {

                if (result) {

                    res.status(200).json({
                        message: "You can update your password now if you've forgotten it.",
                        status: 200
                    })

                } else {
                    res.status(406).json({
                        message: "Wrong number of digits.Please try again.",
                        status: 406
                    })
                }
            })
        } else {
            res.status(404).json({
                message: "user data is not found",
                status: 404
            })
        }


    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}


//newPassword  -> pass, newPass
exports.newPassword = async (req, res) => {
    try {

        const result = await user.findOne({ email: req.params.email })

        if (result) {

            const cPass = req.body.confirmPassword;
            const pass = req.body.newPassword;


            if (cPass == pass) {

                const update_db = await user.findByIdAndUpdate({ _id: result._id }, {
                    $set: {
                        password: bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null)
                    }
                }, {
                    new: true,
                    useFindAndModify: false
                })

                res.status(200).json({
                    message: "your password is changed",
                    status: 200
                })
            } else {
                res.status(401).json({
                    message: "Password dose not matched",
                    status: 401
                })
            }


        } else {
            res.status(404).json({
                message: "user data is not found",
                status: 404
            })
        }


    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}
