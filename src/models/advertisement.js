const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdvertisementSchema = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: Number,  required: false },
    picture: { type: String, required: false },
    expirate_date: { type: String, required: false },
    pet_shop_id: { type: Schema.Types.ObjectId, ref: 'PetShop' }
});

mongoose.model('Advertisement', AdvertisementSchema);