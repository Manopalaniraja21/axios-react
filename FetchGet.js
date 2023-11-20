import React from 'react'

const FetchApi = () => {
  const handleFetch=()=>{
    fetch("http://localhost:8080/books")
    .then((response)=>response.json())
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))

  }
  return (
    <div>
      
      <button onClick={handleFetch}>Fetch value</button>
    </div>
  )
}

export default FetchApi 
