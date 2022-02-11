import axios from "axios";
import React, { useState,useEffect } from "react";

import './list.css'
  export default function List() {
    const [name, setName] = useState([]);
    function handleDeleteClick(id){
      console.log(id)
      // const todoId = id;
      axios.delete(`http://localhost:3001/api/deletetodo/${id}`)
      .then((res) => {
        console.log(res);
       
      })
      .catch((err) =>
      {
        console.log(err);
      })
      refreshPage();
    }
    function refreshPage() {
      window.location.reload(false);
    }
    useEffect(() => {
        axios.get(`http://localhost:3001/api/getalltodo`)
        .then((response) => {
          console.log("data",response);
          setName(response.data);
        })
          .catch(error => {
            console.log("Error: " + error);
            })
        }, []);
        const allName = name.map((item) => {
          console.log("items",item);
          return <li class="card">{item.name}<button onClick={() => handleDeleteClick(item.id)}>X</button></li> ;
        });
     
      return (
          <div>
        
        <ul class="layout__list">
        
        {allName}
        {/* <li class="card">shopping</li>
       <li class="card">movie</li> */}
        </ul>
          
          </div>
      );
  }  