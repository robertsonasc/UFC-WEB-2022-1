var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var ProfessorSchema = mongoose.Schema(
    {
        name: { type: String, required: true, max: 100 },
        university: { type: String, required: true, max: 100 },
        degree: { type: String, required: true, max: 100 },
    }
);

var StudentModel = mongoose.model('professors', ProfessorSchema)

module.exports =StudentModel