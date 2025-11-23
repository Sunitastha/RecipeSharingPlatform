// const express = require("express");
// // const path = require('path');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Importing Routers
// const authRouter = require('./modules/authentication/router');
// const userRouter = require('./modules/user/router');
// const recipeRouter = require('./modules/Recipe/router');
// //const recipeConstantRouter =require('./utils/constant/recipes.constant')

// const app = express();

// app.use(express.json());
// app.use(cors());

// // Serve static files from the "uploads" directory
// // app.use('/uploads', express.static(__dirname + '/uploads'));

// // Routes
// app.use('/auth', authRouter);
// app.use('/user', userRouter);
// app.use('/recipe', recipeRouter);
// //app.use('/recipesConstant',recipeConstantRouter);

// // Default route
// app.get('/', (req, res) => {
//     res.send('Welcome to the Recipe Sharing Platform');
// });

// const port = process.env.PORT || 8083;

// app.listen(port, async () => {
//     console.log(`App is running on port ${port}`);
//     try {
//         await mongoose.connect("mongodb+srv://admin:admin@cluster0.fhlt7iy.mongodb.net/RecipeRealm?retryWrites=true&w=majority&appName=Cluster0", {

//         });
//         console.log('Database is connected');
//     } catch (e) {
//         console.log('Database connection error:', e);
//     }
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const { RECIPES } = require("./utils/constant/recipes.constant"); // Import RECIPES from the constant file

// Importing Routers
const authRouter = require("./modules/authentication/router");
const userRouter = require("./modules/user/router");
const recipeRouter = require("./modules/Recipe/router"); // Adjusted filename to lowercase

const app = express();

app.use(express.json());
app.use(cors());

const path = require("path");
// Serve static files from the "uploads" directory
// app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/file", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/recipe", recipeRouter);

// Example route to demonstrate using RECIPES constant
// app.get("/recipesConstant", (req, res) => {
//   res.json(RECIPES); // Return the RECIPES array as JSON response
// });

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Recipe Sharing Platform");
});

const port = process.env.PORT || 8083;

app.listen(port, async () => {
  console.log(`App is running on port ${port}`);
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.fhlt7iy.mongodb.net/RecipeRealm?retryWrites=true&w=majority&appName=Cluster0",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true
      }
    );
    console.log("Database is connected");
  } catch (e) {
    console.log("Database connection error:", e);
  }
});
