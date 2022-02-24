import axios from "axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './list.css'
export default function List() {
  const [name, setName] = useState([]);
  function handleDeleteClick(id) {
    console.log(id)
    // const todoId = id;
    axios.delete(`http://localhost:3001/api/deletetodo/${id}`)
      .then((res) => {
        console.log(res);

      })
      .catch((err) => {
        console.log(err);
      })
    refreshPage();
  }
  function handleUpadateClick(id){
    console.log(id)
    // const todoId = id;
    axios.patch(`http://localhost:3001/api/updatetodo/${id}`)
      .then((res) => {
        console.log(res);

      })
      .catch((err) => {
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
        console.log("data", response);
        setName(response.data);
      })
      .catch(error => {
        console.log("Error: " + error);
      })
  }, []);
  const allName = name.map((item) => {
    console.log("items", item);
    return <li className="card">
      <button className="update" onClick={() => handleUpadateClick(item.id)}>√</button>
       <div className={item.checked ? "strike" : ""}>
       <label>{item.name}</label>
       </div>
      {/* {item.checked ? handleUpadateClick(item.id): false} */}
      
      <button className="delete" onClick={() => handleDeleteClick(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
    </li>;
  });

  return (
    <div>

      <ul class="layout__list">
        {allName}
      </ul>

    </div>
  );
}  