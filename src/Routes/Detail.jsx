import { useEffect,useState,react } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [singleDentist,setSingleDentist]=useState({})
  const paramsForDentist=useParams()
  
  const getIdDentist=async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users/"+ paramsForDentist.id )
    .then((response)=>{
      return response.json()
    })
    setSingleDentist(data)
  }
  useEffect(()=>{
    getIdDentist()
  },[])


  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>{singleDentist.name}</p>
      <p>{singleDentist.email}</p>
      <p>{singleDentist.phone}</p>
      <p>{singleDentist.website}</p>
    </>
  )
}

export default Detail