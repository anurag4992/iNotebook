const express=require('express');
const router=express.Router();
const User=require("../models/User");
const { body, validationResult } = require('express-validator');

router.post("/createUser", [
    body('name', "Enter a  valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Invalid password(>5 required)").isLength({ min: 5 })
], async (req, res) => {
    //if error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    
    let user= await User.findOne({email: req.body.email});
    if(user){
            res.status(400).json({error: "User already exists, jake login kr"});
        }
    
    
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

    res.json(user);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Some error ocurred");
    }

})

module.exports=router;