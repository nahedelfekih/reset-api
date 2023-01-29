const express = require("express");
const User = require("./models/User");
const router = express.Router();
router.use(express.json())


router.get('/user', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post('/user', async (req, res) => {
    const user = new User(req.body)
    try {
        // const {name} = req.body
        await user.save();
        res.status(200).json({message: "user added", data: user})
    } catch (error) {
        res.status(404).json(error.message)
    }
})

router.patch('/user/:id', async (req, res) => {
    
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/user/:id', async (req, res) => {
    
    try {
        await User.findByIdAndRemove({_id: req.params.id});
        res.status(200).json({message: "user deleted"})
    } catch (error) {
        res.status(404).json(error)
    }
})



module.exports = router;