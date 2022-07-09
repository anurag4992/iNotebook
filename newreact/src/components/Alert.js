import React from 'react'

const Alert = (props) => {
    const capitals = (word) =>{
        if(word==="danger"){
            word="Error"
        }
        else if(word==="warning"){
            word="Read instructions"
        }
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-dismissible alert-${props.alert.type} fade show`} role="alert">
                <strong>{capitals(props.alert.type)}</strong>: {props.alert.msg}</div>}
        </div>
    )
}

export default Alert