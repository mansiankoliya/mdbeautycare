const { toTitleCase, validateEmail } = require("../config/function");
const bcrypt = require("bcryptjs");
const userModel = require("../models/users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const { mailService } = require("../helper/mail.helper");


class Auth {
  async isAdmin(req, res) {
    let { loggedInUserId } = req.body;
    try {
      let loggedInUserRole = await userModel.findById(loggedInUserId);
      res.json({ role: loggedInUserRole.userRole });
    } catch {
      res.status(404);
    }
  }

  async allUser(req, res) {
    try {
      let allUser = await userModel.find({});
      res.json({ users: allUser });
    } catch {
      res.status(404);
    }
  }

  /* User Registration/Signup controller  */
  async postSignup(req, res) {
    let { name, email, password, cPassword } = req.body;
    let error = {};
    if (!name || !email || !password || !cPassword) {
      error = {
        ...error,
        name: "Filed must not be empty",
        email: "Filed must not be empty",
        password: "Filed must not be empty",
        cPassword: "Filed must not be empty",
      };
      return res.json({ error });
    }
    if (name.length < 3 || name.length > 25) {
      error = { ...error, name: "Name must be 3-25 character" };
      return res.json({ error });
    } else {
      if (validateEmail(email)) {
        name = toTitleCase(name);
        if ((password.length > 255) | (password.length < 8)) {
          error = {
            ...error,
            password: "Password must be 8 character",
            name: "",
            email: "",
          };
          return res.json({ error });
        } else {
          // If Email & Number exists in Database then:
          try {
            password = bcrypt.hashSync(password, 10);
            const data = await userModel.findOne({ email: email });
            if (data) {
              error = {
                ...error,
                password: "",
                name: "",
                email: "Email already exists",
              };
              return res.json({ error });
            } else {
              let newUser = new userModel({
                name,
                email,
                password,
                // ========= Here role 1 for admin signup role 0 for customer signup =========
                userRole: 2, // Field Name change to userRole from role
              });
              const result = await newUser.save()

              const val = Math.random().toString(36).substring(2, 8);
              console.log("verify_code", val);

              let sub = "Verification code details are";
              let html = `<center><div style="background-color: white;color:black;padding:2%;line-height: 30px;border-radius: 5px; text-align: center;width: 500px; height: 200px; ">
                  <p>Hello ${result.email} , <br> We got a request to create your account. Your verification code  is <u><b>${val}</b></u> If you ignore this message , your account is not created. </p></center>
                  `;

              await mailService(result.email, sub, html)

              const verify_code = bcrypt.hashSync(val, bcrypt.genSaltSync(8), null)

              const update_db = await userModel.findByIdAndUpdate({ _id: result._id }, {
                $set: {
                  verify_code: verify_code
                }
              }, {
                new: true,
                useFindAndModify: false
              })

                .then((data) => {
                  return res.json({
                    success: "Your Verification code send in your mail",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        error = {
          ...error,
          password: "",
          name: "",
          email: "Email is not valid",
        };
        return res.json({ error });
      }
    }
  }


  //verify_code
  async postverifyCode(req, res) {
    try {

      const data = await userModel.findOne({ email: req.params.email })

      if (data) {

        const verify_code = data.verify_code

        const code = req.body.verify_code

        bcrypt.compare(code, verify_code, async (err, result) => {

          if (result) {

            res.status(201).json({
              message: "Account create successfully. Please login",
              status: 201,
              data: data
            });

          } else {

            const r1 = await userModel.findOneAndDelete({ email: req.params.email })

            res.status(406).json({
              message: "Wrong number of digits.Please try again.",
              status: 406
            })
          }
        })

      } else {
        res.status(404).json({
          message: "user data not found",
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




  /* User Login/Signin controller  */
  async postSignin(req, res) {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        error: "Fields must not be empty",
      });
    }
    try {
      const data = await userModel.findOne({ email: email });
      if (!data) {
        return res.json({
          error: "Invalid email or password",
        });
      } else {
        const login = await bcrypt.compare(password, data.password);
        if (login) {
          const token = jwt.sign(
            { _id: data._id, role: data.userRole },
            JWT_SECRET
          );
          const encode = jwt.verify(token, JWT_SECRET);
          return res.json({
            token: token,
            user: encode,
          });
        } else {
          return res.json({
            error: "Invalid email or password",
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

const authController = new Auth();
module.exports = authController;







// const { toTitleCase, validateEmail } = require("../config/function");
// const bcrypt = require("bcryptjs");
// const userModel = require("../models/users");
// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../config/keys");

// class Auth {
//   async isAdmin(req, res) {
//     let { loggedInUserId } = req.body;
//     try {
//       let loggedInUserRole = await userModel.findById(loggedInUserId);
//       res.json({ role: loggedInUserRole.userRole });
//     } catch {
//       res.status(404);
//     }
//   }

//   async allUser(req, res) {
//     try {
//       let allUser = await userModel.find({});
//       res.json({ users: allUser });
//     } catch {
//       res.status(404);
//     }
//   }

/* User Registration/Signup controller  */
  // async postSignup(req, res) {
  //   let { name, email, password, cPassword } = req.body;
  //   let error = {};
  //   if (!name || !email || !password || !cPassword) {
  //     error = {
  //       ...error,
  //       name: "Filed must not be empty",
  //       email: "Filed must not be empty",
  //       password: "Filed must not be empty",
  //       cPassword: "Filed must not be empty",
  //     };
  //     return res.json({ error });
  //   }
  //   if (name.length < 3 || name.length > 25) {
  //     error = { ...error, name: "Name must be 3-25 charecter" };
  //     return res.json({ error });
  //   } else {
  //     if (validateEmail(email)) {
  //       name = toTitleCase(name);
  //       if ((password.length > 255) | (password.length < 8)) {
  //         error = {
  //           ...error,
  //           password: "Password must be 8 charecter",
  //           name: "",
  //           email: "",
  //         };
  //         return res.json({ error });
  //       } else {
  //         // If Email & Number exists in Database then:
  //         try {
  //           password = bcrypt.hashSync(password, 10);
  //           const data = await userModel.findOne({ email: email });
  //           if (data) {
  //             error = {
  //               ...error,
  //               password: "",
  //               name: "",
  //               email: "Email already exists",
  //             };
  //             return res.json({ error });
  //           } else {
  //             let newUser = new userModel({
  //               name,
  //               email,
  //               password,
  //               // ========= Here role 1 for admin signup role 0 for customer signup =========
  //               userRole: 2, // Field Name change to userRole from role
  //             });
  //             newUser
  //               .save()
  //               .then((data) => {
  //                 return res.json({
  //                   success: "Account create successfully. Please login",
  //                 });
  //               })
  //               .catch((err) => {
  //                 console.log(err);
  //               });
  //           }
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       }
  //     } else {
  //       error = {
  //         ...error,
  //         password: "",
  //         name: "",
  //         email: "Email is not valid",
  //       };
  //       return res.json({ error });
  //     }
  //   }
  // }

/* User Login/Signin controller  */
//   async postSignin(req, res) {
//     let { email, password } = req.body;
//     if (!email || !password) {
//       return res.json({
//         error: "Fields must not be empty",
//       });
//     }
//     try {
//       const data = await userModel.findOne({ email: email });
//       if (!data) {
//         return res.json({
//           error: "Invalid email or password",
//         });
//       } else {
//         const login = await bcrypt.compare(password, data.password);
//         if (login) {
//           const token = jwt.sign(
//             { _id: data._id, role: data.userRole },
//             JWT_SECRET
//           );
//           const encode = jwt.verify(token, JWT_SECRET);
//           return res.json({
//             token: token,
//             user: encode,
//           });
//         } else {
//           return res.json({
//             error: "Invalid email or password",
//           });
//         }
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// const authController = new Auth();
// module.exports = authController;
