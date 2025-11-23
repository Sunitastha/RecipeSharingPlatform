// const express = require('express');
// const router = express.Router();
// const controller = require('./controller');
//  // Adjust the path according to your folder structure
// const imageUpload = require('../Multer/uploadMiddleware');

// router.get('/', controller.getAll);
// router.get('/:id', controller.getById);
// router.post('/', imageUpload.single('image'), controller.create); // Use multer middleware for the create route
// router.put('/:id', controller.update);
// router.delete('/:id', controller.remove);

// module.exports = router;
// imageUpload.single('image'),(req,res)=>{
//     console.log(req.file);
//     res.send("hello");
//  })

// const express = require('express');
// const router = express.Router();
// const controller = require('./controller');
// const imageUpload = require('../Multer/uploadMiddleware');

// // GET all recipes
// router.get('/', controller.getAll);

// // GET recipe by ID
// router.get('/:id', controller.getById);

// // GET recipes by userId
// router.get('/user/:userId', controller.getRecipesByUserId); // New endpoint for fetching recipes by userId

// // POST create a new recipe with image upload or image URL
// router.post('/', imageUpload.single('image'), controller.create);

// // PUT update a recipe by ID
// router.put('/:id', controller.update);

// // DELETE remove a recipe by ID
// router.delete('/:id', controller.remove);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const controller =express('./controller');
// const imageUpload = require('../Multer/uploadMiddleware');
// const verifyUser = require('../authentication/auth.middleware');

// // GET all recipes
// router.get('/', controller.getAll);

// // GET recipe by ID
// router.get('/:id', controller.getById);

// // GET recipes by userId
// router.get('/getRecipesByUserId/:userId', controller.getRecipesByUserId);

// // POST create a new recipe with image upload or image URL
// router.post('/', verifyUser, imageUpload.single('image'), controller.create);

// // PUT update a recipe by ID
// router.put('/:id', verifyUser, controller.update);

// // DELETE remove a recipe by ID
// router.delete('/:id', verifyUser, controller.remove);

// module.exports = router;

// // Recipe router
// const recipeRouter = express.Router();
// const router = express.Router();
// const controller =express('./controller');
// const imageUpload = require('../Multer/uploadMiddleware');
// const verifyUser = require('../authentication/auth.middleware');

// // Get all recipes
// router.get('/', (req, res) => {
//   // Define the callback function
//   const getRecipes = async () => {
//     // Fetch recipes from the database or API
//     const recipes = await fetchRecipesByUserId();
//     // Return the recipes as JSON
//     res.json(recipes);
//   };
//   // Call the callback function
//   getRecipes();
// });

// // Get recipe by ID
// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   const getRecipe = async () => {
//     // Fetch the recipe from the database or API
//     const recipe = await fetchRecipesByUserId(id);
//     if (!recipe) {
//       res.status(404).send({ message: 'Recipe not found' });
//     } else {
//       res.json(recipe);
//     }
//   };
//   // Call the callback function
//   getRecipe();
// });
// router.get('/getRecipesByUserId/:userId', Controller.getRecipesByUserId);

// // Get recipes by userId
// router.get('/user/:userId', (req, res) => {
//   const userId = req.params.userId;
//   const getRecipesByUserId = async () => {
//     // Fetch recipes for the specified user from the database or API
//     const recipes = await fetchRecipesByUserId(userId);
//     // Return the recipes as JSON
//     res.json(recipes);
//   };
//   // Call the callback function
//   getRecipesByUserId();
// });

// // POST create a new recipe with image upload or image URL
// router.post('/', verifyUser, imageUpload.single('image'), (req, res) => {
//   // Define the callback function
//   const createRecipe = async () => {
//     // Create a new recipe with the provided image and other details
//     const recipe = await createRecipeWithImage(req.body, req.file);
//     // Return the created recipe as JSON
//     res.json(recipe);
//   };
//   // Call the callback function
//   createRecipe();
// });

// // PUT update a recipe by ID
// router.put('/:id', verifyUser, (req, res) => {
//   const id = req.params.id;
//   const updateRecipe = async () => {
//     // Update the recipe with the provided details
//     const recipe = await updateRecipeById(id, req.body);
//     // Return the updated recipe as JSON
//     res.json(recipe);
//   };
//   // Call the callback function
//   updateRecipe();
// });

// // DELETE remove a recipe by ID
// router.delete('/:id', verifyUser, (req, res) => {
//   const id = req.params.id;
//   const deleteRecipe = async () => {
//     // Delete the recipe from the database or API
//     await deleteRecipeById(id);
//     // Return a success message
//     res.send({ message: 'Recipe deleted successfully' });
//   };
//   // Call the callback function
//   deleteRecipe();
// });

// module.exports = router;

// // GET all recipes
// router.get('/', controller.getAll);

// // GET recipe by ID
// router.get('/:id', controller.getById);

// // GET recipes by userId
// router.get('/user/:userId', controller.getRecipesByUserId);

// // POST create a new recipe with image upload or image URL
// router.post('/', verifyUser, imageUpload.single('image'), controller.create);

// // PUT update a recipe by ID
// router.put('/:id', verifyUser, controller.update);

// // DELETE remove a recipe by ID
// router.delete('/:id', verifyUser, controller.remove);

// module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("./controller");
const imageUpload = require("../Multer/uploadMiddleware");
const verifyUser = require("../authentication/auth.middleware");

// GET all recipes
router.get("/", (req, res) => {
  controller.getAll(req, res, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: "Error retrieving data",
        error: err.message,
      });
    } else {
      res.status(200).send({
        status: 200,
        message: "Data retrieved",
        data: data,
      });
    }
  });
});

// GET recipe by ID
router.get("/:id", (req, res) => {
  controller.getById(req, res, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: "Error retrieving data",
        error: err.message,
      });
    } else if (!data) {
      res.status(404).send({
        status: 404,
        message: "Data not found",
      });
    } else {
      res.status(200).send({
        status: 200,
        message: "Data retrieved",
        data: data,
      });
    }
  });
});

// GET recipes by userId
router.get("/getRecipesByUserId/:userId", (req, res) => {
  controller.getRecipesByUserId(req, res, (err, recipes) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: "Error retrieving recipes",
        error: err.message,
      });
    } else if (!recipes) {
      res.status(404).send({
        status: 404,
        message: "No recipes found for the user",
      });
    } else {
      res.status(200).send({
        status: 200,
        message: "Recipes retrieved",
        data: recipes,
      });
    }
  });
});

// POST create a new recipe with image upload or image URL
router.post("/", verifyUser, imageUpload.single("image"), (req, res) => {
  // Save only filename in DB
  if (req.file) {
    req.body.image = req.file.filename;
  }

  controller.create(req, res, (err, data) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: "Error creating recipe",
        error: err.message,
      });
    }

    res.status(201).json({
      status: 201,
      message: "Recipe created successfully",
      data,
    });
  });
});

// PUT update a recipe by ID
router.put("/:id", verifyUser, (req, res) => {
  controller.update(req, res, (err) => {
    if (err) {
      res.status(400).send({
        status: 400,
        message: "Error updating data",
        error: err.message,
      });
    } else {
      res.status(200).send({
        status: 200,
        message: "Data updated",
      });
    }
  });
});

// DELETE remove a recipe by ID
router.delete("/:id", verifyUser, (req, res) => {
  controller.remove(req, res, (err) => {
    if (err) {
      res.status(400).send({
        status: 400,
        message: "Error deleting data",
        error: err.message,
      });
    } else {
      res.status(200).send({
        status: 200,
        message: "Data deleted",
      });
    }
  });
});

module.exports = router;
