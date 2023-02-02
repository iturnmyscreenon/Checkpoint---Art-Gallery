const express = require("express");

const router = express.Router();

const artControllers = require("./controllers/artControllers");

router.get("/art", artControllers.browse);
router.get("/art/:id", artControllers.read);
router.post("/art", artControllers.add);
router.delete("/art/:id", artControllers.destroy);

module.exports = router;
