import React, { useState } from 'react'
import "../component/form.css";

const Form = () => {
    const [inputfield, setInputField] = useState("");

    const emailValue = e => {
        setInputField(e.target.value);
    }

    const emailCheck = () =>{
        if(inputfield.length > 0){;
            console.log(inputfield);
        } else{
            alert("please enter email")
        }

        setInputField("");

    }


    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <form className='form-content' onSubmit={submitHandler}>
        
        <label >Contact</label>

        <input className='form-name' placeholder="Write Email" type="email" value={inputfield} onChange={emailValue}/>
        <input className='form-button'  type="submit" onClick={emailCheck}/>
    </form>
  )
}

export default Form