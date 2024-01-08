import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        minLength: 10,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
})

export default mongoose.model("Blog", BlogSchema);