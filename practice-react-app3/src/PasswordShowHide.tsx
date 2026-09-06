import {useState} from "react"

export default function PasswordShowHide(){
    const [state,setState] = useState("******");
    function showPassword(){
        setState("12&38$%#");
    }
    function hidePassword(){
        setState("******");
    }
    return (
        <div>
            <p>{state}</p>
            <p onClick = {showPassword}>[Show Password]</p>
            <p onClick = {hidePassword}>[Hide Password]</p>
        </div>
    )
}