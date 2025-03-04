import "./Download.css";
import { useEffect, useState } from "react";

const filesDummy = [
  {
    name: "cat.jpg",
    url: "http://localhost:3000/cat.jpg",
  },
  {
    name: "dog.jpg",
    url: "http://localhost:3000/dog.jpg",
  },
  
];

function Download() {
  const [files, setFiles] = useState(filesDummy); 

useEffect(() => {fetchfiles},[])

const fetchfiles = () => {
  axios.get('http://localhost:3000/files/list').then
  ((res) =>{
    setFiles(res.data)  
  })
  .catch((err) => {
    console.log(err)
  })
}

  return (
    <div className="download-container"> 
      <h1>Download</h1> 
      <div className="files-list">
        {files.map((file) => ( 
          <div key={Math.random()}> 
            <b>&bull;&nbsp;{file.name}</b> 
            <a href={file.url} target="_blank"> 
              <button className="dowload-button">&darr;</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Download;
