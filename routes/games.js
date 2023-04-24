const express = require("express");
const { validateToken } = require("../middleware/validateToken");
const {
  getAllGames,
  findGamesByCategory,
  searchGameByName,
  searchGameByTag,
  getAGameById,
  adminCreateAGame,
  adminEditAGame,
  adminDeleteAGame,
  getGamesPagination,
} = require("../controllers/games");
const router = express.Router();

router.get("/", getAllGames);
router.get("/pagination", getGamesPagination);
router.get("/category/:category", validateToken, findGamesByCategory);
router.get("/search", validateToken, searchGameByName);
router.get("/tags/:tag", validateToken, searchGameByTag);
router.get("/:id", getAGameById);
router.post("/admin/create", validateToken, adminCreateAGame);
router.put("/admin/edit/:id", validateToken, adminEditAGame);
router.delete("/admin/delete/:id", validateToken, adminDeleteAGame);

module.exports = router;
