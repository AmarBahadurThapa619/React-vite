import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    function handleClick(){
        setIsLoggedIn(!isLoggedIn);
    }

    function handleInputBoxChange(e){
        setName(e.target.value);
    }
    return(
        <div
            style ={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
            }}
        >
            <input type="text" onChange={handleInputBoxChange}/>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <h2>His name is  {name}</h2>
            <button onClick={handleClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>  
        </div>
    );
}
export default Navbar; 