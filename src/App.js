import './App.css';
import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import Header from "./components/Header";
import axios from "axios";


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
	const [ splashs, setSplashs ] = useState([])
	const [ cover, setCover ] = useState()
	const [ title, setTitle ] = useState('')
	const [ description, setDescription ] = useState('')
	const [ create, setCreate ] = useState('')

	const newSplash = () => {
		const uploadData = new FormData()
		uploadData.append('title', title)
		uploadData.append('description', description)
		uploadData.append('cover', cover)
		fetch('http://localhost:8000/api/splashs/', {
			method: 'POST',
			body: uploadData
		})
		.then(res => {
			console.log(res)
			setCreate(res)
		})
		.catch(err => {
			console.log(err)
			setCreate(err)
		})
	}

	useEffect(()=>{
		const getList = () => {
		fetch('http://localhost:8000/api/splashs/')
		.then(response => response.json())  // convert to json
		.then(json => {
			json.reverse()
			setSplashs(json)
		}) 
		.catch(err => console.log(err))
	  }
	  getList()
	}, [create])

  return (
	<>
	<Header
	title={title} 
	description={ description} 
	splashs={splashs}
	setTitle={setTitle} 
	setCover={setCover} 
	setDescription={setDescription} 
	newSplash={newSplash} 
	/>
	<Gallery splashs={splashs}/>
	</>
  )
}


export default App;
