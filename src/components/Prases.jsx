import React, { useState } from 'react'
import { TiMicrophone } from "react-icons/ti";
import { RiRecordCircleFill } from "react-icons/ri";


import './Prases.css'

export default function Prases() {
  const [text, setText] = useState('')  
  const [showRecord, setShowRecord] = useState(false)
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const recordGrab = () => {
    setShowRecord(!showRecord)
    console.log('inicia grabacion')
  }

  const stopGrab = () => {
    setShowRecord(!showRecord)
    console.log('detiene grabacion')
  }


  return (
    <div>
      <h2 className="titlePrase"> Speech Azure </h2>
      <section className='containInputs'>
        <input
          value={text}
          className="inputprase"
          type="text"
          placeholder="prase en ingles"
          onChange={handleChange}
        />
        {!showRecord ? (
          <aside className="contenMicro" onClick={recordGrab}>
            <TiMicrophone fontSize={"1.5rem"} />
          </aside>
        ) : (
          <>
            <aside className="contenGrab" onClick={stopGrab}>
              <RiRecordCircleFill fontSize={"1.5rem"} color="red" />
            </aside>
            <p className="textgrab">grabando</p>
          </>
        )}
      </section>
    </div>
  );
}

