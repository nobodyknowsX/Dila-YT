const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserControllers"); // ✅ Ensure correct filename

// Get all users
router.get("/", UserController.getAllUsers);

// Add a new user
router.post("/", UserController.addUsers);

// Get a user by ID
router.get("/:id", UserController.getById);

// Update a user by ID (should be a PUT request)
router.put("/:id", UserController.updateUser);

// Delete a user by ID (should be a DELETE request)
router.delete("/:id", UserController.deleteUser);

// Export the router
module.exports = router;
