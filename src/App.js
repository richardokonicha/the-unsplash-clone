import './App.css';
import { useState, useEffect } from 'react'
// import Gallery from './components/Gallery'
import Gallery from './components/GalleryCrew'
import Header from "./components/Header";

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
	// <Gallery 
	// title={title} 
	// description={ description} 
	// splashs={splashs}
	// setTitle={setTitle} 
	// setCover={setCover} 
	// setDescription={setDescription} 
	// newSplash={newSplash} 
	// />
	<>
	<Header/>
	<Gallery splashs={splashs}/>
	</>
  )
}


export default App;
