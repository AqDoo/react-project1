import Button from "./Button/Button"
import { differences } from "../data"

import { useState } from "react"

export default function EducationsSection() {

    const [contentType, setContentType] = useState(null)


    function handleCLick(type) {
      setContentType(type)
    }

    return (
        <><Button isActive={contentType == 'way'} onClick={() => handleCLick('way')}>Баклавриат</Button>
        <Button isActive={contentType == 'easy'} onClick={() => handleCLick('easy')}>Магистратура</Button>
        <Button isActive={contentType == 'program'} onClick={() => handleCLick('program')}>Докторантура</Button>
        <section>
            
        <p>{differences[contentType]}</p>
        </section></>
    )
}