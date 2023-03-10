import Fonte from "../models/Fonte";

class FonteController{

    async index(req, res){

        const fontes = await Fonte.findAll();

        res.status(200).json(fontes);
    }

    async busca(req, res){
        const fontes = await Fonte.findAll({
            attributes: ['nome']
        })

        res.status(200).json(fontes)
    }

}

export default new FonteController(); 