const contact = require('../models/contact.model');


//insert
exports.contactInsert = async (req, res) => {
    try {

        const data = await new contact({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
            Message: req.body.Message
        })

        const result = await data.save();

        res.status(200).json({
            message: "Message Sent Successfully",
            // message: "Contact inserted successfully",
            status: 200,
            data: result
        })

    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "Something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}