const mongoose = require('mongoose');
const Advertisement = mongoose.model('Advertisement');

const Register = async(req,res) => {
    const { title, description, price, picture, 
            expirate_date, pet_shop_id } = req.body;
    try {
        const advertisement = new Advertisement({
            title,
            description,
            price,
            picture,
            expirate_date,
            pet_shop_id
        });
        await advertisement.save();
        return res.status(201).send({
            success: true,
            message: 'Created advertisement'
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
}

const ListAdvertisement = async(req, res) => {
    try {
        const advertisements = await Advertisement.find({});
        return res.status(200).send({
            success: true,
            advertisements
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

const EditAdvertisement = async (req, res) => {
    const { title, description, price, picture, 
        expirate_date } = req.body;
    const id = req.params.id;
    try {
        const advertisement = await Advertisement.findById(id);
        advertisement.title = title;
        advertisement.description = description;
        advertisement.price = price;
        advertisement.picture = picture;
        advertisement.expirate_date = expirate_date;
        await advertisement.save();

        return res.status(200).send({
            success: true,
            message: 'Advertisement update succesfully'
        });
    } catch (err) {
        return res.statur(500).send({
            success: false,
            message: err.message
        });
    };
};

const DeleteAdvertisement = async (req, res) => {
    const id = req.params.id;
    try {
        await Advertisement.deleteOne({_id: id});
        return res.status(200).send({
            success: true,
            message: 'Advertisement deleted!'
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

module.exports = {
    Register,
    ListAdvertisement,
    EditAdvertisement,
    DeleteAdvertisement
}