import React from 'react'



const Gallery = (props) => {
    const { 
        title, 
        description, 
        splashs, 
        setTitle, 
        setCover, 
        setDescription, 
        newSplash } = props

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
    )
}

export default Gallery;