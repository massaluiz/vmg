const database = require('../models');

class Users {
    
    static async readAll(req, res) {

        try {
            const users = await database.User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }


    static async readById(req, res) {
        
        try {
            const users = await database.User.findOne({where: {id: Number(req.params.id)}});
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async create(req, res) {

        try {
            const user = await database.User.create(req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async update(req, res) {

        try {
            await database.User.update(req.body, {where: {id: Number(req.params.id)}});
            const user = await database.User.findOne({where: {id: Number(req.params.id)}});
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async delete(req, res) {
        
        try {
            const users = await database.User.destroy({where: {id: Number(req.params.id)}});
            return res.status(200).json({message: `user with id: ${req.params.id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

}

module.exports = Users;