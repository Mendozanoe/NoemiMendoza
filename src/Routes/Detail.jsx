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
    <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>E-mail</th>
      <th>Telefono</th>
      <th>WebSite</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{singleDentist.name}</td>
      <td>{singleDentist.email}</td>
      <td>{singleDentist.phone} </td>
      <td>{singleDentist.website}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Detail