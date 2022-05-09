const usersCtrl = {};
const Note = require('../models/Note');
const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const result = await User.find();
    return res.json(result);
}

usersCtrl.saveUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    return res.json({message : "User Saved"});
}

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({message : "User Deleted"});
}

module.exports = usersCtrl;