import { Link,useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function Logout(){
    const navigate=useNavigate();  
    alert("Logout Success...!");
    navigate('/Login');
}

export default Logout;