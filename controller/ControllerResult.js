const functionReverse = require('../Testing1-3/reverse');
const functionFibonacci = require('../Testing1-3/fibonacci');
const functionCombination = require('../Testing1-3/combination');

exports.reverse = async (req, res) => {
    try {
        const { character } = req.body;
        const result = functionReverse(character);
        res.status(200).json({ "result": result });
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}

exports.fibonacci = async (req, res) => {
    try {
        const { n } = req.body;
        const result = functionFibonacci(n);
        res.status(200).json({ "result": result });
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}

exports.combination = async (req, res) => {
    try {
        const { n, r } = req.body;
        const result = functionCombination(n, r);
        res.status(200).json({ "result": result });
    } catch (err) {
        res.status(400).json(response.bad(err.message));
    }
}