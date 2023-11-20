import axios from 'axios'
import React, { useEffect,useState } from 'react'


const AxiosGet = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
         try{
          const response=await axios.get("http://localhost:8080/books")
          console.log(response.data)
              setBooks(response.data);
         }
         catch(error){
  console.log(error)
         }};
       fetchData();
    },[]);
  return (
    <div>
        <table>
            <thead>
           <tr>
            <th>Id</th>
            <th>Book title</th>
            <th>Author name</th>
           </tr>
            </thead>
            <tbody>
            {books.map((book)=>(
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                </tr>
            ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default AxiosGet