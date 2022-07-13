import React from 'react'
import TextInput from '../group/TextInput'
import { useState } from 'react'

export default function Contact() {
    const [test, setTest] = useState(false)

    const showHandle = () =>{
        setTest(!test)
    }

  return (
    <div>
    <button onClick={showHandle}>Toggle</button>,
    
    {test && <TextInput onChange={e => e.targer.value}/>}
    </div>
  )
}
