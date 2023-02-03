const express = require("express");

const router = express.Router();

const mailControllers = require("./controllers/mailControllers");

const artControllers = require("./controllers/artControllers");

const contactControllers = require("./controllers/contactControllers");

router.get("/contact", contactControllers.browse);
router.get("/contact/:id", contactControllers.read);
router.post(
  "/contact",
  contactControllers.add,
  mailControllers.sendContactMail
);
router.delete("/contact/:id", contactControllers.destroy);

router.get("/art", artControllers.browse);
router.get("/art/:id", artControllers.read);
router.post("/art", artControllers.add);
router.delete("/art/:id", artControllers.destroy);

module.exports = router;
