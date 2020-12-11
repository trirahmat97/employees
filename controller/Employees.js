const Employees = require('../model/Employees');
const response = require('../utils/response');

exports.getAll = async (req, res) => {
    try {
        const data = await Employees.findAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Employees.findByPk(id);
        if (!data) {
            return res.status(404).json(response.notfound('Data Not Found!'));
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}

exports.create = async (req, res) => {
    try {
        const { name, phone_number, jobtitle } = req.body;
        const createData = await Employees.create({ name, phone_number, jobtitle });
        res.status(200).json(createData);
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, phone_number, jobtitle } = req.body;
        const data = await Employees.findByPk(id);
        if (!data) {
            return res.status(404).json(response.notfound('Data Not Found!'));
        }
        const updateData = await data.update({
            name: name ? name : data.name,
            phone_number: phone_number ? phone_number : data.phone_number,
            jobtitle: jobtitle ? jobtitle : data.jobtitle
        });
        res.status(200).json(updateData);
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Employees.findByPk(id);
        if (!data) {
            return res.status(404).json(response.notfound('Data Not Found!'));
        }
        await data.destroy();
        res.status(204).json();
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}