const Schema = require('./schema');

const getAll = async (req, res) => {
    try {
        const data = await Schema.find({});
        res.status(200).send({
            status: 200,
            message: 'Data retrieved',
            data: data
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Error retrieving data',
            error: error.message
        });
    }
}

const getById = async (req, res) => {
    try {
        const data = await Schema.findById(req.params.id);
        if (data) {
            res.status(200).send({
                status: 200,
                message: 'Data retrieved',
                data: data
            });
        } else {
            res.status(404).send({
                status: 404,
                message: 'Data not found'
            });
        }
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Error retrieving data',
            error: error.message
        });
    }
}

const create = async (req, res) => {
    try {
        const data = await Schema.create(req.body);
        res.status(201).send({
            status: 201,
            message: 'Data created',
            data: data
        });
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: 'Error creating data',
            error: error.message
        });
    }
}

const update = async (req, res) => {
    try {
        await Schema.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({
            status: 200,
            message: 'Data updated'
        });
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: 'Error updating data',
            error: error.message
        });
    }
}

const remove = async (req, res) => {
    try {
        await Schema.findByIdAndDelete(req.params.id);
        res.status(200).send({
            status: 200,
            message: 'Data deleted'
        });
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: 'Error deleting data',
            error: error.message
        });
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}
