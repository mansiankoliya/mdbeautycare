// const { mailService } = require("../helper/mail.helper");
// const user = require("../models/users")
// const subscriber = require('../models/subscriber.model')

// //mail sent
// exports.PaymentSuccess = async (req, res) => {
//     try {


//         // const dd = req.userDetails;
//         // console.log("dd", dd._id);
//         const userData = await user.findOne({ email: req.body.email })

//         console.log("data", userData);
//         if (userData) {

//             // mail content
//             let sub = "Payment Successfully Message Are.";
//             // let html = `<p>Hello, it's M & D Beauty Care We're glad to inform you that we have confirmed your payment. Thank you!</p>`;
//             let html = `  <body style="text-align: center;
//             padding: 40px 0;
//             background: #EBF0F5;
//             ">

//    <div class="card" style="background-color: white;
//                             padding: 60px;
//                             border-radius: 4px;
//                             box-shadow: 0 2px 3px #C8D0DB;
//                             display: inline-block;
//                             margin: 0 auto;
//                             ">

//        <div style="border-radius: 200px; 
//                    height:200px; 
//                    width:200px; 
//                    background: #F8FAF5; 
//                    margin: auto;
//                    ">

//            <i class="checkmark" style="color: #9ABC66;
//                                        font-size:100px;
//                                        line-height: 200px;
//                                        margin-left: -15px;
//                                        ">
//                                        ✅   </i>
                                       
                                       

//        </div>

//        <h1 style="color: #88B04B;
//                   font-family: 'Courier New', Courier, monospace;
//                   font-weight: 900;
//                   font-size: 40px;
//                   margin-bottom: 10px;
//                   ">

//            SUCCESS</h1>

//        <p style="color: #404F5E;
//                  font-family: 'Courier New', Courier, monospace;
//                  font-size: 20px;
//                  margin: 0;
//                  ">

//                  Hello, it’s M & D Beauty Care! We’re glad to inform you that we have confirmed your payment.
//        </p>
//    </div>

// </body>
//             `;

//             await mailService(userData.email, sub, html)

//             res.status(200).json({
//                 message: "Message sent successfully",
//                 status: 200,
//                 email: userData.email,
//                 // data: userData
//             })


//         } else {
//             res.status(404).json({
//                 message: "User data not found",
//                 status: 404
//             })
//         }

//     } catch (error) {
//         console.log("--error--", error);
//         res.status(500).json({
//             message: "something went wrong , please try again",
//             status: 500,
//             error: error.message
//         })
//     }
// }




// //insertsubscriber
// exports.InsertSubscriber = async (req, res) => {
//     try {


//         const data = await new subscriber({
//             email: req.body.email,
//             name: req.body.name
//         })

//         const result = await data.save()

//         res.status(200).json({
//             message: "You Subscribed",
//             status: 200,
//             data: result
//         })

//     } catch (error) {
//         console.log("--error--", error);
//         res.status(500).json({
//             message: "something went wrong , please try again",
//             status: 500,
//             error: error.message
//         })
//     }
// }


const { mailService } = require("../helper/mail.helper");
const user = require("../models/users")
const subscriber = require('../models/subscriber.model')

//mail sent
exports.PaymentSuccess = async (req, res) => {
    try {


        // const dd = req.userDetails;
        // console.log("dd", dd._id);
        const userData = await user.findOne({ email: req.body.email })

        console.log("data", userData);
        if (userData) {

            // mail content
            let sub = "Payment Successfully Message Are.";
            // let html = `<p>Hello, it's M & D Beauty Care We're glad to inform you that we have confirmed your payment. Thank you!</p>`;
            let html = `  <body style="text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
            ">

   <div class="card" style="background-color: white;
                            padding: 60px;
                            border-radius: 4px;
                            box-shadow: 0 2px 3px #C8D0DB;
                            display: inline-block;
                            margin: 0 auto;
                            ">

       <div style="border-radius: 200px; 
                   height:200px; 
                   width:200px; 
                   background: #F8FAF5; 
                   margin: auto;
                   ">

           <i class="checkmark" style="color: #9ABC66;
                                       font-size:100px;
                                       line-height: 200px;
                                       margin-left: -15px;
                                       ">
                                       ✅   </i>
                                       
                                       

       </div>

       <h1 style="color: #88B04B;
                  font-family: 'Courier New', Courier, monospace;
                  font-weight: 900;
                  font-size: 40px;
                  margin-bottom: 10px;
                  ">

           SUCCESS</h1>

       <p style="color: #404F5E;
                 font-family: 'Courier New', Courier, monospace;
                 font-size: 20px;
                 margin: 0;
                 font-weight : bold;
                 ">

                 Hello, it’s M & D Beauty Care! We’re glad to inform you that we have confirmed your payment.
       </p>
   </div>

</body>
            `;

            await mailService(userData.email, sub, html)

            res.status(200).json({
                message: "Message sent successfully",
                status: 200,
                email: userData.email,
                // data: userData
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




//insertsubscriber
exports.InsertSubscriber = async (req, res) => {
    try {


        const data = await new subscriber({
            email: req.body.email,
            name: req.body.name
        })

        const result = await data.save()

        res.status(200).json({
            message: "You Subscribed",
            status: 200,
            data: result
        })

    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}

