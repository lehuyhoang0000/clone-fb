import { useState } from "react";

// const From = () => {
//     const [value, setValue] = useState("jump")

//     const handleSubmit =( event ) =>{
//         event.preventDefault();
//         setValue("")
//         setValuePassword("")
//         console.log("value", value )
//         console.log("password", valuePassword)
//     }

//     const handleInChange = ( event ) =>{
//         setValue(event.target.value);
//         // console.log(event.target.value)
//     }

//     const [valuePassword, setValuePassword] = useState("")

//     const handleInputPasswordChange = ( event ) =>{
//         setValuePassword(event.target.value)
//         // console.log("password", valuePassword)
//     }

//     return (
//         <form onSubmit={handleSubmit} action="">
//             <input type="email" value={value} onChange={handleInChange}/>
//             <input type="password" value={valuePassword} onChange={handleInputPasswordChange} />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }






const From = () => {

    const handleChangeSumbit = (event) => {
        event.preventDefault();
        setValue("")
        setPassword("")
        console.log("value:", value);
        console.log("Password:", password);
    }

    const [value, setValue] = useState("")

    const handleClick = (event) => {
        setValue(event.target.value)
    }

    const [password, setPassword] = useState("")

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }


    return(
        <form onSubmit={handleChangeSumbit}>
            <input placeholder="@gmail.com" type="email" value={value} onChange={handleClick} />
            <input placeholder="12345678" type="password" value={password} onChange={handlePassword} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default From