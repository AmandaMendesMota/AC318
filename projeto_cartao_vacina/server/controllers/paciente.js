const Paciente = require('../models/paciente');
const Vacina = require('../models/vacina');

const paciente = {};

paciente.getPaciente = async (req, res) => { //obtém os dados de todos os pacientes que estão no banco de dados
    if(req.params.id){
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    }
    const pacientes = await Paciente.find();
    res.json(pacientes);
};

paciente.createPaciente = async (req, res) => { //cria um novo paciente no banco de dados
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.json({
        'status': 'Paciente Salvo!'
    });
}

paciente.editPaciente = async (req, res) => {
    const { id } = req.params;
    const paciente = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        numCartao: req.body.numCartao,
        endereco: req.body.endereco,
        dataNascimento: req.body.dataNascimento,
        vacina: req.body.vacina
    };
    await Paciente.findByIdAndUpdate(id, {$set: paciente}, {new: true});
    res.json({status: 'Paciente Atualizado'});
}

paciente.deletePaciente = async (req, res) =>{
    await Paciente.findByIdAndRemove(req.params.id);
    res.json({status: 'Paciente Excluído'});
}

module.exports = paciente;