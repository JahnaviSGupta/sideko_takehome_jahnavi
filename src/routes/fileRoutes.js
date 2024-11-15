const express = require('express');
const multer = require('multer');
const { compareFiles } = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/**
 * @swagger
 * /api/files/compare:
 *   post:
 *     summary: Compare two files for differences
 *     description: Upload two files and get a comparison result indicating differences.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file1:
 *                 type: string
 *                 format: binary
 *                 description: The first file to compare.
 *               file2:
 *                 type: string
 *                 format: binary
 *                 description: The second file to compare.
 *     responses:
 *       200:
 *         description: Comparison result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 identical:
 *                   type: boolean
 *                   description: Whether the files are identical.
 *                 changes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       part:
 *                         type: integer
 *                         description: The part of the file being described.
 *                       added:
 *                         type: boolean
 *                         description: If the line was added.
 *                       removed:
 *                         type: boolean
 *                         description: If the line was removed.
 *                       content:
 *                         type: string
 *                         description: The content of the change.
 *       400:
 *         description: Bad request (e.g., if files are missing or have different types).
 *       500:
 *         description: Internal server error
 */

router.post('/compare', upload.fields([{ name: 'file1' }, { name: 'file2' }]), compareFiles);

module.exports = router;