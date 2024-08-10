const schema = require('./schema');

const getAll = async (req, res) => {
    const data = await schema.find({});
    // select * from category;
    res.send({
        status: 200,
        message: 'Data retrieved',
        data: data
    });
}


const getById = async (req, res) => {
    const data = await schema.findById(req.params.id);
    if (data) {
        res.send({
            status: 200,
            message: 'Data retrieved',
            data: data
        });
    } else {
        res.send({
            status: 404,
            message: 'Data could not be found',
            data: data
        });
    }
}

const create = async (req, res) => {
    try {
        const data = await schema.create({
          ...req.body
        });
        res.send({
            status: 201,
            message: 'Data created',
            data: data
        })
    } catch (e) {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: data
        })
    }
}

const update = async (req, res) => {
    try {
        await schema.findByIdAndUpdate(req.params.id, {
            ...req.body
        });
        res.send({
            status: 200,
            message: 'Data updated'
        })
    } catch (e) {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: data
        })
    }
}

const remove = async (req, res) => {
    try {
        await schema.findByIdAndDelete(req.params.id);
        res.send({
            status: 200,
            message: 'Data deleted'
        })
    } catch (e) {
        res.status(400).send({
            status: 400,
            message: 'Action could not be completed',
            data: data
        })
    }
}



module.exports = {
    getAll,
    create,
    update,
    remove,
    getById,
}