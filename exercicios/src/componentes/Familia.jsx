import React from "react"

export default props => 
    <div>
        <h1>Família {props.sobrenome}</h1>
        {/*Renderiza vários filhos*/}
        {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })}

        {/*Renderiza apenas um filho*/}
        {/*{React.cloneElement(props.children, {...props})}*/} 
        
        {/*{React.cloneElement(props.children, props)}*/}
        
        {/*{React.cloneElement(props.children, 
            {sobrenome: props.sobrenome})}*/}
    </div>