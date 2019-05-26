const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

const Register = async(req,res) => {
    const { name, species, birthdate, gender,
            weight, vaccination, disease, surgery, owner_id } = req.body;
    
    console.log(typeof(user));
    try {
        const pet = new Pet({
            name,
            species,
            birthdate,
            gender,
            weight,
            vaccination,
            disease,
            surgery,
            owner_id
        });
        await pet.save();
        return res.status(201).send({
            success: true,
            message: 'Created pet!'
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

/* const FindPets = async(req,res) => {
    const id = req.params.id;
    try {
        const pets = await Pet.find({}).populate('owner_id', 'first_name last_name');
        return res.status(200).send({
            success: true,
            pets
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
}; */

const FindPetsByUser = async(req, res) => {

    try {
        const user = req.user;
        const pets = await Pet.find({ owner_id: user.session.id });

        return res.status(200).send({
            success: true,
            pets
        });
    }
    catch (err){
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
};

const EditPet = async(req,res) => {
    const { name, species, birthdate, gender,
        weight, vaccination, disease, surgery } = req.body;
    const id = req.params.id;
    try {
        const pet = await Pet.findById(id);
        pet.name = name;
        pet.species = species;
        pet.birthdate = birthdate;
        pet.gender = gender;
        pet.weight = weight;
        pet.vaccination = vaccination;
        pet.disease = disease;
        pet.surgery = surgery;
        await pet.save();

        return res.status(200).send({
            success: true,
            message: 'Pet update successfully'
        });

    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

const DeletePet = async(req, res) => {
    const id = req.params.id;
    try {
        await Pet.deleteOne({_id: id})
        return res.status(200).send({
            success: true,
            message: 'Pet deleted!'
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    Register,
    FindPetsByUser,
    EditPet,
    DeletePet
};