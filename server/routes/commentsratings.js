const CommentsRatings = require("../models/CommentsRatings");

const router = require("express").Router();


// get comments & ratings for product

router.get("/find/:productid", async (req, res) => {
  try {
    const cmrt = await CommentsRatings.find({ productid: req.params.productid });
    res.status(200).json(cmrt);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
// add comment & rating for product 

router.post("/addcommentrating", async (req, res) => {
    const newCommentRating = new CommentsRatings({
      username: req.body.username,
      productid: req.body.id,
      rating: req.body.rating,
      text: req.body.text
    });
    try {
      const savedCommentRating = await newCommentRating.save();
      res.status(201).json(savedCommentRating);
    } catch (err) {
      res.status(500).json(err);
    }
});

// delete comment with rating 

router.delete("/deletecommentrating/:id", async (req, res) => {
  try {
    const deletedCommentRating = await CommentsRatings.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCommentRating);
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit comment with rating 

router.put("/editcommentrating/:id", async (req, res) => { 
    try {
      const editCommentRating = await CommentsRatings.findByIdAndUpdate(
        req.params.id,
        {
          rating: req.body.rating,
          text: req.body.text
        },
      );
      res.status(200).json(editCommentRating);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;
