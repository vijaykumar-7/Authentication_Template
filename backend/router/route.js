const express =require("express");
const router =express.Router();

// const { register } = require("../controller/usercontroller");

const usercontroller = require("../controller/usercontroller")
// const productcontroller = require("../controller/productcontroller")
const {loginauth,adminauth} =require("../middleware/auth")
// const upload = require("../middleware/photoupload")

router.post("/register",usercontroller.register)
router.post("/login",usercontroller.login)
router.post("/forgotpassword",usercontroller.forgotpassword)

router.get("/loginverify", loginauth, (req,res)=>{
    res.send({ok:"user verify successfully"})
})

router.get("/adminverify", adminauth, (req,res)=>{
    res.send({ok:"user verify successfully"})
})


// router.post("/addproduct",loginauth,adminauth,upload.single("photo"),productcontroller.addproduct)
// router.get("/product",productcontroller.Product)
// router.get("/product/:id",productcontroller.singleproduct)
// router.put("/editproduct/:id",loginauth,adminauth,upload.single("photo"),productcontroller.editproduct)
// router.delete("/deleteproduct/:id",productcontroller.deleteproduct)

module.exports =router;