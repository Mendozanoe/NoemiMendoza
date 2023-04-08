import React, { useContext } from "react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor.jpg"
import { ContextGlobal } from "./utils/global.context";


  const Card = ({ name, username, id }) => {

    const {data,setData} = useContext(ContextGlobal)
    

    const addFav = (dentistName, dentistUsername, dentistId) => {
  
      if(data.filter(dentist=>dentist.id ===dentistId).length>0){
        setData((previousState)=> previousState.filter(dentist=>dentist.id!==dentistId))
        return
      }
      setData((previousState)=>
      previousState.length===0?[{name:dentistName,username:dentistUsername,id:dentistId}]:
      [...previousState,{name:dentistName,username:dentistUsername,id:dentistId}]
      )
    }

     

  return (

    <div className="card" style={{ textAlign: "center" }}>
      <Link to={"detail/" + id} >
        <img src={doctor} alt={name} style={{ width:130,borderRadius:100,display: "block", margin: "0 auto"}} />
        <h1>{name}</h1>
        <h2>{username}</h2>
        <h3>{id}</h3>
        <button onClick={()=> addFav(name, username, id)} className="favButton">Add fav</button>
      </Link>
    </div>

  );
};

export default Card;
