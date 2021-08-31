const {foods} = require("../models/")

module.exports = {

//get data
    getAllFoods : (req, res) => {
        foods.findAll()
        .then((data)=> {

            res.send({
                msg : 'succes',
                status: 200,
                data
            })
        })
        .catch ((err) =>{
            res.send({
                msg : 'error',
                status : 500,
                err,
            })
        })
    },

//post data
    postFoods : (req,res) => {
        let{body} =req
        foods.create(body)
        .then((data) => {
            res.status(200).send({
                msg : 'succes post',
                status : 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg : 'failed post',
                status : 500,
                err,
            })
        })
    },

//edit data
    putDataById : (req,res) =>{
        let {id} = req.params
        let{body} = req
        foods.update(body,{ where:{id}
        })
        .then((data) => {
            res.status(200).send({
                msg : 'edit succes',
                status : 200,
                data
            })
        })
        .catch((err) => {
            res.status(500).send({
                msg : 'edit error',
                status : 500,
                err,
            })
        })
    },

//delete data
    deleteData : (req,res) => {
        let {id} = req.params
        foods.destroy({
            where : {id}
        })
        .then((data) => {
            res.status(200).send({
                msg : 'succes delete data',
                status : 200,
                data
            })
        })
        .catch((err) => {
            res.status(500).send({
                msg : ' failed delete data',
                status : 500,
                err,
            })
        })
    },

}