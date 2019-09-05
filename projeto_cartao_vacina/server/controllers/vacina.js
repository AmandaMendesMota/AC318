const Vacina = require('../models/vacina'); //consulta o banco

const vacina = {}; //cria um objeto do tipo vacina

vacina.getVacinas = async(req, res)=>{ //obtém todas as vacinas
    const vacinas = await Vacina.find();
    res.json(vacinas);  
};

vacina.createVacina = async(req, res)=>{ //
    const vacina = new Vacina(req.body);
    await vacina.save();
    res.json({
        'status': 'Vacina Salva!'
    });
}

vacina.getVacina = async (req, res) => { //
    const vacina = await Vacina.findById(req.params.id);
    res.json(vacina);
}

vacina.editVacina = async (req, res) => { //
    const { id } = req.params;
    const vacina = {
        nome: req.body.nome,
        dose: req.body.dose,
        dataAplicacao: req.body.dataAplicacao,
        reforco: req.body.reforco,
        observacao: req.body.observacao,
        lote: req.body.lote,
        postoSaude: req.body.postoSaude

    };
    await Vacina.findByIdAndUpdate(id, {$set: vacina}, {new: true});
    res.json({status: 'Vacina Atualizada'});
}

vacina.deleteVacina = async (req, res) => {  //
    await Vacina.findByIdAndRemove(req.params.id);
    res.json({status: 'Vacina Excluída'});
}

module.exports = vacina;