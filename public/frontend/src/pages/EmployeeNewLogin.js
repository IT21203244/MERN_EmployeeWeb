import React,{useState} from "react";

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email,password);
    const response = await fetch('/api/empuser/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ email, password }),
   });

   const data = await response.json();

    if (response.ok) {
      alert('Login Successful !');
      window.location.href='http://localhost:3000/EmployeeHome';
      
    } else {
      // Handle login error
      alert("Invalid username or Password. Try Again !")
      console.log(data.error);
    }
  };



    return(
        <>
        
        <div className="container" style={{backgroundColor:"#D3D9CA",width:500,marginTop:20,height:500,marginBottom:20}}>
        <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <br></br>
        <h2 style={{marginLeft:-10}}>Log In</h2>
        
        <img src="images/profile.png" style={{width:70,height:70}}/>
        <div class="mb-3">
  <label for="username" class="form-label"></label>
  <input type="text" class="form-control"  onChange={(e)=>setEmail(e.target.value)} id="username" placeholder="Enter your Email" style={{width:350,marginLeft:60}} required/>
</div>
<div class="mb-3">
  <label for="password" class="form-label"></label>
  <input type="password" class="form-control"   onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Enter your password" style={{width:350,marginLeft:60}} required/>
  <a href = "/password"><h9 style={{marginLeft:220}}>Forgot Password</h9></a>
</div>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
  <button type="submit" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:-10}}>LogIn</button>
    </div><br></br>
    <a href = "/register"><h9 style={{marginLeft:-10}}>Or SignUp </h9></a>
</form>
        </div>
      
        </>
        
    )
}