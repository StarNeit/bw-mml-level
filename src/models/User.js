var mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            index: true,
            unique: true
        },
        fullName: { type: String, required: true },
        userName: { type: String, required: true, lowercase: false, index: true, unique: true },
        passwordHash: { type: String, required: true },
        key: { type: String, required: false },
        address: { type: String, required: true },
        keystore: {type: Object, required: true},
        referralId: { type: String, required: false},
        refObject: {
            totalDownline: 0,
            level: 0
        },
        confirmed: { type: Boolean, default: false },
        confirmationToken: { type: String, default: "" },
        token: { type: String, required: true },
        wallets: { type: Object, required: false},
        balances: { type: Object, required: false},
        bwc_tokens: { type: Number, required: false},
        internal_transfer: { type: String, default: "N" },

        network_id: {type: String, default: "0"},// for restoring db
        o_ref_id: {type: String, default: "0"} // for restoring db
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", schema);