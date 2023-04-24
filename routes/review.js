const express = require("express");
const {
  getAllReviewsOfAGame,
  getAReviewOfAGameFromAUser,
  createAReviewForAGameFromAUser,
} = require("../controllers/review");
const router = express.Router();

router.get("/:gameId/", getAllReviewsOfAGame);
router.get("/:gameId/:userId", getAReviewOfAGameFromAUser);
router.post("/:gameId/:userId", createAReviewForAGameFromAUser);

module.exports = router;
