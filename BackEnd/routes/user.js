const express = require('express');
const router = express.Router();

const {createUser} = require("../controllers/createUser");
const {getUserdata} = require("../controllers/getUserdata")

router.post('/createUser',createUser);
router.get('/getUserdata',getUserdata);

module.exports = router;
