import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result.data);
                navigate('/home'); // Adjust this line if needed
            })
            .catch(err => {
                console.error(err);
            });
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    placeholder='enter email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type='password'
                    placeholder='enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit">Login</button>
            </form>
            <br></br>
            <Link to='/signup'>SignUp</Link>
        </div>
    )
}

export default Login