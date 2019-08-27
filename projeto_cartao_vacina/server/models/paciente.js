const mongoose = require('mongoose');
const {Schema } = mongoose;

const PacienteSchema = new Schema({
    nome: { type: String, required: true},
    cpf: { type: Number, required: true},
    numCartao: { type: Number, required: true},
    endereco: { type: String, required: true},
    dataNascimento: { type: String, required: true}, 
    vacina: { type: Schema.Types.ObjectId, ref: "Vacina", required: false}
});

module.exports = mongoose.model('Paciente', PacienteSchema);