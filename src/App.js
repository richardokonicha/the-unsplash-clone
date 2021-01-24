import './App.css';
import { useState, useEffect } from 'react'
import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
	const [ splashs, setSplashs ] = useState([])
	const [ cover, setCover ] = useState()
	const [ title, setTitle ] = useState('')
	const [ description, setDescription ] = useState('')

	const newSplash = () => {
		const uploadData = new FormData()
		uploadData.append('title', title)
		uploadData.append('description', description)
		uploadData.append('cover', cover)
		fetch('http://localhost:8000/api/splashs/', {
			method: 'POST',
			body: uploadData
		})
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}

	useEffect(()=>{
		console.log('this is use Effect')
		const getList = () => {
		fetch('http://localhost:8000/api/splashs/')
		.then(response => response.json())  // convert to json
		.then(json => {
			console.log(json)
			setSplashs(json)
		}) 
		.catch(err => console.log(err))
	  }
	  getList()
	}, [])

  return (
    <div className="App">
      <header className="App-header">
       
	   <div>
		   <label>
			   Title
			   <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
		   </label>
		   <label>
			   Description
			   <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
		   </label>
		   <label>
			   Image
			   <input type="file" onChange={(e) => setCover(e.target.files[0])}/>
		   </label>
		   <button onClick={newSplash}>Add new</button>
	   </div>

	   {
		   splashs.map((data) =>(
			   <div key={data.id}>
				   {data.title}
				   {data.description}
			   </div>
		   ))
	   }
      </header>
    </div>
  );
}

export default App;
