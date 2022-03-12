const Newsletter = require("../models/Newsletter");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// //GET ALL

router.get("/",  async (req, res) => {
  try {
    const mails = await Newsletter.find();
    res.status(200).json(mails);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
