const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');

const app = express();

app.use('/', express.static("public"));
app.use(fileUpload()); // fileUpload() is a middleware function what allows handling files
                       // we will be able to access the file using the request object

app.post("/resume", (req, res) => {
    // if there's no file or pdf file send error status
    if (!res.files && !req.files.pdfFile) {
        res.status(400);
        res.end("No File Found");
    }
    pdfParse(req.files.pdfFile).then(result => {
        let resume_text = "Resume: " + result.text;
        //console.log(resume_text, typeof resume_text); => String
        res.send(resume_text);
    }); // 'pdfFile' is the key of the uploaded file

});

app.listen(3000);