import logo from './logo.svg';
import './App.css';
//import pdfjsLib from './pdfjs/build'

function upload(e) {
  let files = e.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (e) => {
    console.log("Resume", e.target.result);  //e.target.result gives the link to the file
    console.log(typeof e.target);
  }
    // save the file to the local storage as text and
  //pdfjsLib.getDocument(files[0]);
}

function App() {
  return (
    <div className="App">
        <h4>Upload Your Resume:</h4>
        <form action="resume">
          <input type="file" name="file" onClick={(e) => e.target.value=null} />
          <button type="submit" id="btn-upload">Submit</button>
          <br></br><br></br>
          <textarea id="search-result" placeholder="Search result will display here..."></textarea>
        </form>
    </div>
  );
}

export default App;
