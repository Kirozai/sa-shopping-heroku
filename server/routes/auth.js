const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product")
const Newsletter = require("../models/Newsletter");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json();
  }
});


//checkpass

router.post("/checkpassword", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.id });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if ( OriginalPassword == req.body.currentPassword ) {

      res.status(200).json(true)
    } else { res.status(200).json(false) }

  } catch (err) {
    res.status(500).json(err);
  }
});


// updateUsername
router.put("/updateUsername", async (req, res) => { 
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.body.id,
      {
        username: req.body.username,
      },
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// updateEmail
router.put("/updateEmail", async (req, res) => { 
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.body.id,
      {
        email: req.body.email,
      },
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// updatePassword
router.put("/updatePassword", async (req, res) => { 
  try {
    const encryptedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
    const updatedUser = await User.findByIdAndUpdate(
      req.body.id,
      {
        password: encryptedPassword,
      },
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});














// updatePrd
router.put("/updatePrd", async (req, res) => { 
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.body.id,
      {
        title: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        categories: req.body.category,
        color: req.body.color,
        size: req.body.size,
        inStock: req.body.status,  
      },
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});


//NEWSLETTER
router.post("/newsletterregister", async (req, res) => {
  const newUser = new Newsletter({
    email: req.body.email
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
