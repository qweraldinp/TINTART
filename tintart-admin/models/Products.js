import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {type:String, required: true},
    desc: String,
    price: {type:Number, required: true},
});

export const Product = models.Product || model('Product', ProductSchema);