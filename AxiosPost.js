import axios from 'axios';
import React, { useRef } from 'react'

const AxiosPost = () => {
    const bookIdRef=useRef("");
    const bookTitleRef=useRef(null);
    const bookAuthorRef=useRef(null);
  const handlePost= async()=>{
    const data={
        id:bookIdRef.current.value,
        title:bookTitleRef.current.value,
        author:bookAuthorRef.current.value
    };
    
       try {
        const response=await axios.post("http://localhost:8080/books",data);
        console.log(response)
       } catch (error) {
        console.log(error)
       }
    

  }
  return (
    <div>

        <input type='text' ref={bookIdRef}/>
        <input type='text' ref={bookTitleRef}/>
        <input type='text' ref={bookAuthorRef}/>
        <button onClick={handlePost}>Post</button>
    </div>
  )
}

export default AxiosPost