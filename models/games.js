const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    type: {
        type: Number,
        default: 4 //4 => X-O 3D 4*4*4
    },
    // scoreless: {
    //     type: Boolean,
    //     default: false
    // },
    players: [{
        self: { type: Schema.Types.ObjectId, ref: "Users" }, //self like python self :)
        score: { type: Number, default: 0 }
    }],

    date: {
        type: Date,
        required: true
    },

    isLive: {
        type: Boolean,
        default: true
    },

    league: {
        type: Schema.Types.ObjectId,
        ref: "Leagues",
        default: null
    }
});

module.exports = mongoose.model("Games", gameSchema);