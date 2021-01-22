import './App.css';
import { useState, useEffect } from 'react'
import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
	const [ splashs, setSplashs ] = useState([])
	useEffect(()=>{
		console.log('this is use Effect')
		const getList = () => {
		axios
		  .get("/api/splashs/")
		  .then((res) => {
			console.log(res.data)
			setSplashs(res.data)
		  })
		  .catch((err) => console.log(err))
	  }
	  getList()
	}, [])

  return (
    <div className="App">
      <header className="App-header">
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
