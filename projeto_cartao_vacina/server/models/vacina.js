const mongoose = require('mongoose');
const {Schema } = mongoose;

const VacinaSchema = new Schema({
    nome: { type: String, required: true},
    dose: { type: Number, required: true},
    dataAplicacao: { type: String, required: true},
    reforco: { type: String, required: true},
    observacao: { type: String, required: true},
    lote: { type: String, required: true},
    postoSaude: { type: String, required: true}  
});

module.exports = mongoose.model('Vacina', VacinaSchema);