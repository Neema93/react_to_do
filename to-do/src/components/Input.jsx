import React, { useState,useEffect } from "react";
import axios from 'axios';
import './input.css'
  export default function Input() {
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
          name
        };
        axios.post("http://localhost:3001/api/todo", user)
            .then(res => {
                console.log(res);
                // history.push("/List")

            })
            .catch(err => {
                console.log(err)
            });
            handleReset();
            setTimeout(()=> {
                // history.push('/List');
                },1500);
            // alert.show(‘Thanks for Donating’);
    }
    function handleReset() {
        setName("");
    }
      return (
          <div>
          <form onSubmit={handleSubmit} >
          <input type="text" value={name}
                        onChange={(event) => setName(event.target.value)} />
          <button type="submit">Add</button>
          </form>
          </div>
      );
  }  