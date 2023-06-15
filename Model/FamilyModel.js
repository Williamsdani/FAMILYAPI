const mongoose = require('mongoose');

const FamilySchema = new mongoose.Schema( {
    FathersName: {
        type: String,
        required: true
    },
    MothersName: {
        type: String,
        required: true
    },
    Children: {
        type: Array,
        required: true
    },
    ChildrenImage: {
        type: Array,
        required: true
    }
}, { timestamps: true } )

const famModel = mongoose.model( "FamilyProfile", FamilySchema );
module.exports = FamilyModel; 




module.exports =FamilyModel