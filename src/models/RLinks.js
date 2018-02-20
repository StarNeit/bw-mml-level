var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    level1: [String],
    level2: [String],
    level3: [String],
    level4: [String],
    level5: [String],
    level6: [String],
    level7: [String],
    level8: [String]
}, { usePushEach: true });

module.exports = mongoose.model("RLinks", schema);