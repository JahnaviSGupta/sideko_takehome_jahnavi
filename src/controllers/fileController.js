const fs = require('fs');
const path = require('path');
const jsdiff = require('diff');
const pdfParse = require('pdf-parse');

async function compareFiles(req, res) {
    try {
        const file1 = req.files.file1[0];
        const file2 = req.files.file2[0];

        if (!file1 || !file2) {
            return res.status(400).json({ message: 'Two files are required for comparison.' });
        }

        const ext1 = path.extname(file1.originalname);
        const ext2 = path.extname(file2.originalname);

        if (ext1 !== ext2) {
            return res.status(400).json({ message: 'Files must have the same extension.' });
        }

        let content1, content2;

        if (ext1 === '.pdf') {
            content1 = await pdfParse(fs.readFileSync(file1.path));
            content2 = await pdfParse(fs.readFileSync(file2.path));
            content1 = content1.text;
            content2 = content2.text;
        } else {
            content1 = fs.readFileSync(file1.path, 'utf8');
            content2 = fs.readFileSync(file2.path, 'utf8');
        }

        const diffs = jsdiff.diffLines(content1, content2);

        fs.unlinkSync(file1.path);
        fs.unlinkSync(file2.path);

        const changes = diffs.map((part, index) => ({
            part: index + 1,
            added: part.added || false,
            removed: part.removed || false,
            content: part.value.trim(),
        }));

        res.json({ identical: changes.length === 1 && !changes[0].added && !changes[0].removed, changes });
    } catch (error) {
        res.status(500).json({ message: 'Error comparing files', error: error.message });
    }
}

module.exports = { compareFiles };
