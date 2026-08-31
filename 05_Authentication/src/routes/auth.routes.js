const express = require('express')
const authController = require("../controllers/auth.controller")

const router = express.Router();

/*POST /api/auth/register */
router.post("/register", authController.registerUser)

router.get("/test", (req,res) =>{
    console.log("Cookies: ",req.cookies)
    res.json({
        message: "Text route",
        cookies: req.cookies
    })
})


module.exports = router;