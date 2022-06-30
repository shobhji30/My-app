import React, { useState } from 'react'

export default function TextForm() {

    const handleOnChange=(event)=>{
        // console.log("onchange fired")
        setText(event.target.value)
    }

    const handleUpClick=()=>{
        // console.log("onclick fired")
        let newText=text.toUpperCase();
        setText(newText)
    }

    function extractEmails(text)
        {
            return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        }

    const handleEmailExtract=(event)=>{
        // console.log("onclick fired")
        let newemail=extractEmails(text);
        setEmail(newemail)
        event.preventDefault()
    }


    const handleLowClick=()=>{
        // console.log("onclick fired")
        let newText=text.toLowerCase();
        setText(newText)
    }

    const [text,setText]=useState("Enter text here")
    const [email,setEmail]=useState("No email found!")

  return (
    <>
    <div className='container'>
        <h1>Enter your text below to analyze</h1>
        <form>
            <div className="mb-3 ">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleEmailExtract}>Extract emails</button>
            </div>
  
        </form>
      
    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>E-mails:-</h3>
        <p>{email}</p>
    </div>
    </>
  )
}
