const mongoose = require('mongoose');
const PetShop = mongoose.model('PetShop');

const Register = async(req,res) => {
    const { name, phone, location, latitude, longuitude, status } = req.body;

    try {
        const petShop = new PetShop({
            name,
            phone,
            location,
            latitude,
            longuitude,
            status
        });
        await petShop.save();
        return res.status(201).send({
            success: true,
            message: 'Created pet shop'
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

module.exports = {
    Register
};