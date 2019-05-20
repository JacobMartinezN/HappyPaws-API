const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetShopSchema = new Schema ({
    name: { type: String, required: false },
    phone: { type: String, required: false },
    location: { type: String, requiredp: false },
    latitude: { type: Number, required: false },
    longuitude: { type: Number, required: false },
    status:{ type: Boolean, required: false }
});

mongoose.model('PetShop', PetShopSchema);