// const schema = require('../user/schema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const signin =async (req, res)=>{
//     const {username,password} = req.body;

//     const userExists = await schema.findOne({
//         username: username
//     });

//     if(userExists){
//         const passwordIsSame = await bcrypt.compare(password,userExists.password);

//         if(passwordIsSame){
//             const encryptData={
//                 id: userExists._id,
//             };

//             const expiryOptions = {
//                 expiresIn: '30d'
//             }
//             const token = jwt.sign(encryptData, 'Recipe_Realm',expiryOptions);
//             delete userExists.password;
//             res.send({
//                 message:'User is authenticated',
//                 status: 200,
//                 data:{
//                     user: userExists,
//                     token: token
//                 }
//             });
//         }else{
//             res.status(401).send('Username or password is incorrect');
//         }
//     }else{
//         res.status(401).send('User does not exist');
//     }
// }

// const signup=async (req,res)=>{
//     try {
//         const userData = {
//             username: req.body.username,
//             fullName: req.body.fullName,
//             gender:req.body.gender,
//             age:req.body.age,
//             phone: req.body.phone,
//             email: req.body.email,
//             password: req.body.password

//         };

//         userData.password =await bcrypt.hash(req.body.password, 10);
//         const data = await schema.create(userData);
//         res.send({
//             status: 201,
//             message: 'Data created successfully',
//             data: data
//         })
//     } catch (e) {
//         res.status(400).send({
//             status: 400,
//             message: 'Action could not be completed',
//             data: e
//         })
//     }
// }

// module.exports = {
//     signin,
//     signup
// }

// const schema = require('../user/schema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const signin = async (req, res) => {
//     const { username, password } = req.body;

//     const userExists = await schema.findOne({
//         username: username
//     });

//     if (userExists) {
//         const passwordIsSame = await bcrypt.compare(password, userExists.password);

//         if (passwordIsSame) {
//             const encryptData = {
//                 id: userExists._id,
//             };

//             const expiryOptions = {
//                 expiresIn: '30d'
//             };
//             const token = jwt.sign(encryptData, 'Recipe_Realm', expiryOptions);
//             delete userExists.password;
//             res.send({
//                 message: 'User is authenticated',
//                 status: 200,
//                 data: {
//                     user: userExists,
//                     token: token
//                 }
//             });
//         } else {
//             res.status(401).send('Username or password is incorrect');
//         }
//     } else {
//         res.status(401).send('User does not exist');
//     }
// };

// const signup = async (req, res) => {
//     try {
//         const { username, fullName, gender, age, phone, email, password } = req.body;

//          // Check if username already exists
//          const usernameExists = await schema.findOne({ username: username });
//          if (usernameExists) {
//              return res.status(400).send({
//                  status: 400,
//                  message: 'Username is already taken'
//              })
//          }
//          alert("username is already taken");

//          // Check if phone already exists
//         const phoneExists = await schema.findOne({ phone: phone });
//         if (phoneExists) {
//             return res.status(400).send({
//                 status: 400,
//                 message: 'Phone number is already taken'
//             });
//         } alert("Phone number is already taken");

//         // Check if email already exists
//         const emailExists = await schema.findOne({ email: email });
//         if (emailExists) {
//             return res.status(400).send({
//                 status: 400,
//                 message: 'Email is already taken'
//             });
//         } alert("Email is already taken")

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const userData = {
//             username: username,
//             fullName: fullName,
//             gender: gender,
//             age: age,
//             phone: phone,
//             email: email,
//             password: hashedPassword
//         };

//         const data = await schema.create(userData);
//         res.send({
//             status: 201,
//             message: 'Data created successfully',
//             data: data
//         });
//     } catch (e) {
//         res.status(400).send({
//             status: 400,
//             message: 'Action could not be completed',
//             data: e
//         });
//     }
// };

// module.exports = {
//     signin,
//     signup
// };

const schema = require("../user/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function to check if a field already exists in the database
const checkIfExists = async (field, value, res, message) => {
  const exists = await schema.findOne({ [field]: value });
  if (exists) {
    res.status(400).send({
      status: 400,
      message: message,
    });
    return true;
  }
  return false;
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await schema.findOne({ email: email });

    if (!userExists) {
      return res.status(401).send({
        status: 401,
        message: "User does not exist",
      });
    }

    const passwordIsSame = await bcrypt.compare(password, userExists.password);

    if (!passwordIsSame) {
      return res.status(401).send({
        status: 401,
        message: "Username or password is incorrect",
      });
    }

    const encryptData = { id: userExists._id };
    const expiryOptions = { expiresIn: "30d" };
    const token = jwt.sign(encryptData, "Recipe_Realm", expiryOptions);

    // Exclude the password from the user data sent in the response
    const userWithoutPassword = { ...userExists._doc };
    delete userWithoutPassword.password;

    res.send({
      message: "User is authenticated",
      status: 200,
      data: {
        user: userWithoutPassword,
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "Internal server error",
      data: error.message,
    });
  }
};

const signup = async (req, res) => {
  const { username, fullName, gender, age, phone, email, password } = req.body;

  try {
    // Check if username, phone, or email already exists
    if (
      await checkIfExists(
        "username",
        username,
        res,
        "Username is already taken"
      )
    )
      return;
    if (
      await checkIfExists("phone", phone, res, "Phone number is already taken")
    )
      return;
    if (await checkIfExists("email", email, res, "Email is already taken"))
      return;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      username,
      fullName,
      gender,
      age,
      phone,
      email,
      password: hashedPassword,
    };

    const data = await schema.create(userData);

    res.send({
      status: 201,
      message: "Data created successfully",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      status: 400,
      message: "Action could not be completed",
      data: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const userExists = await schema.findOne({ email });

    if (!userExists) {
      return res.status(401).send({
        status: 401,
        message: "User does not exist",
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const updateData = { password };

    const data = await schema.updateOne({ email }, updateData);

    res.send({
      message: "Password reset successfully",
      status: 200,
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      status: 400,
      message: "Action could not be completed",
      data: error.message,
    });
  }
};

const changePassword = async (req, res) => {
  const { previousPassword, newPassword, confirmPassword, email } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).send({
      status: 400,
      message: "New password and confirm password do not match",
    });
  }

  try {
    const user = await schema.findOne({ email });

    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(previousPassword, user.password);

    if (!isMatch) {
      return res.status(400).send({
        status: 400,
        message: "Previous password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await schema.updateOne(
      { email },
      { password: hashedPassword }
    );

    res.send({
      message: "Password reset successfully",
      status: 200,
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  signin,
  signup,
  resetPassword,
  changePassword,
};
