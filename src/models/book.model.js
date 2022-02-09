import { Schema, model } from "mongoose";

const bookSchema = new Schema(
    {
        bookName: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number
        },
        wishlist: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default model('Books', bookSchema);