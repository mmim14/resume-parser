const resumeFile = document.querySelector('#resume-file');
const uploadButton = document.querySelector('#upload-button');
const resultText = document.querySelector('#search-result');
const searchTerm = document.querySelector('#search-term');
let resume_text = "";

uploadButton.addEventListener("click", () => {
    // formData will retrieve the input file and send it to the server side 
    const formData = new FormData();
    //formData.append() adds a new key, value pair 
    formData.append("pdfFile", resumeFile.files[0]); // 'pdfFile' is the key of this data in the form; we will use this key in the backend side to access this file 
    fetch('/resume', {
        method: "post",
        body: formData
    }).then(response => {
        return response.text();  // interpret 'resposne' file as text, but it's not actually extracting text from pdf; the server side will send the data as text
    }).then(extractedText => {
        resume_text = extractedText.trim();
        resultText.value = resume_text;
    })
});

searchTerm.addEventListener('change', () => {
    let term = searchTerm.value;
    let words = resume_text.split(/\s+/g); // split on all whitespaces 
    let matched_words = "";
    for(let i = 0; i < words.length; i++){
        if(words[i].toLowerCase().includes(term.toLowerCase())) {
            matched_words += words[i] + "\n";
        }
    }
    resultText.value = "Matching words: \n" + matched_words;
});
