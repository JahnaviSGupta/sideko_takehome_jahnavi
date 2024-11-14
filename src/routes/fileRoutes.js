const express = require('express');
const multer = require('multer');
const { compareFiles } = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/compare', upload.fields([{ name: 'file1' }, { name: 'file2' }]), compareFiles);

module.exports = router;
