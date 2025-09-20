const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

/* REST & view routes */
router.get('/', supplierController.index);
router.get('/new', supplierController.newForm);
router.post('/', supplierController.create);
router.get('/:id', supplierController.show);
router.get('/:id/edit', supplierController.editForm);
router.put('/:id', supplierController.update);
router.delete('/:id', supplierController.delete);

module.exports = router;
/**
 * @openapi
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách suppliers
 *     responses:
 *       200:
 *         description: Danh sách trả về
 */
router.get('/', supplierController.index);