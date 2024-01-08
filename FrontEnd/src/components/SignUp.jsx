
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()




    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/signup', { name, email, password })
            .then(result => {
                console.log(result.data);
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type='password'
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit">SignUp</button>
            </form>
            <br></br>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default SignUp
