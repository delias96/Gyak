const express = require("express");
const router = express.Router();
const people = require("../controllers/people");

router.get("/", people.getPeople);
router.post("/", people.createPerson);

router.post("/postman", people.createPersonPostman);
router.put("/:id", people.updatePerson);

router.delete("/:id", people.deletePerson);

module.exports = router;
