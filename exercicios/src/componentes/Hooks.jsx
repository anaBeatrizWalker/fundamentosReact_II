import React, { useEffect, useState } from "react"

export default props => {

    const [contador, setContador] = useState(0)
    const [status, setStatus] = useState('Par')

    useEffect(()=>{
        contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })

    return (
        <div>
            <div>Contador: {contador}</div>
            <div>{status}</div>
                <button onClick={() => setContador(contador + 1)}>+ 1</button>
                <button onClick={() => setContador(contador - 1)}>- 1</button>
        </div>
    )
}