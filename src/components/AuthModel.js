import { useState } from "react";


const AuthModel = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmpassword, setConfirmpassword] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmpassword)

    const handleClick = () =>{
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            if(isSignUp && (password !== confirmpassword)) {
                setError("Passwords need to match!")
            }
            console.log('Make Post request to db')
        } catch(e) {
            console.log(error);
        }
    }

    return (
     <div className="auth-modal">
      <div className="close-icon"onClick={handleClick}>X</div>
      <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
      <p>By tapping Log In, you agree to our Terms. Learn how we process your data in our Private Policy and Cookie Policy</p>
      <form onSubmit={handleSubmit}>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && <input
            type="password-check"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmpassword(e.target.value)}
        />}
        <input className="secondary-button"type="submit"/>
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
      
     </div>
    );
  }
  
  export default AuthModel;
  