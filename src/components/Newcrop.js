import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Newcrop() {

  const[name, setname] = useState('');
  const[disc, setDiscription] = useState('');
  const[Tips, setTips] = useState('');
  const[Products, setProducts] = useState('');
  const[photo, setphoto] = useState('');


  const[author, setAuthor] = useState('Admin');
  const[adding, isAdding] = useState(false);
  const history = useNavigate();

  const formSubmit = (e) =>{
    isAdding(true);
    e.preventDefault();
    const data= { name , disc , author ,photo,Tips,Products} ;
    console.log(data);
    fetch("http://localhost:8000/data",{
      method: 'post',
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(data)  
    })
    .then(()=>{
       console.log("new blog added");
       isAdding(false);
       history('/');
    });
    
  }
 

  return (
    <div className='newcrop'>
        <h1>Add a new blog</h1>
        <form onSubmit={formSubmit}>
            <label >Crop name :</label>
            <input type="text" 
            required
            value={name}
            onChange={(e)=>setname(e.target.value)}
            />

            <label >Photo link :</label>
            <input type="text" 
            required
            value={photo}
            onChange={(e)=>setphoto(e.target.value)}
            />

            <label >Discription :</label>
            <textarea 
            required

            value={disc}
            onChange={(e)=>setDiscription(e.target.value)}
            ></textarea>

            <label >Tips :</label>
            <textarea 
            required

            value={Tips}
            onChange={(e)=>setTips(e.target.value)}
            ></textarea>

            
            <label >Reccomended Products :</label>
            <textarea 
            required

            value={Products}
            onChange={(e)=>setProducts(e.target.value)}
            ></textarea>

            <label >author :</label>
            <select 
            required
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="user1">user1</option>
              <option value="user2">user2</option>
            </select>
            {!adding && <button>Add Blog</button>}
            {adding && <button>Adding..</button>}
            
            {/* <p>{name}{Discription}{author}</p> */}
        </form>

    </div>
    
  )
}

export default Newcrop