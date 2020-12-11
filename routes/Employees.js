const express = require('express');
const router = express.Router();
const employeesRouter = require('../controller/Employees');

router.get('', employeesRouter.getAll);
router.get('/:id', employeesRouter.getById);
router.post('', employeesRouter.create);
router.put('/:id', employeesRouter.update);
router.delete('/:id', employeesRouter.delete);

module.exports = router;