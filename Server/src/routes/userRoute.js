const express = require("express");
const router = express.Router();

const {
  signupUser,
  loginUser,
  getProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/userController");

const authentication = require("../middlewares/auth");

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.get("/profile", authentication, getProfile);
router.put("/update-profile", authentication, updateProfile);
router.delete("/delete-profile", authentication, deleteProfile);

module.exports = router;
