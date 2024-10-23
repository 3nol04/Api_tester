import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
    
const loginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);  
    const [token, setToken] = useState("")

     
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                setError("Harap Isi Semua Data dengan lengkap");
                return;
            }
         const respose= await axios.post("https://api-hotel-two.vercel.app/api/api/login", {
            email : email,
            password : password
            }
        )
        setToken(localStorage.setItem('token',respose.data.token))
        window.location.href = "/";
        console.log(token);
        } catch (error) {
            setError(error.response ? error.response.data.message : "Terjadi kesalahan");
            console.log(error)
        }
    }
    useEffect(() => {
        setError('')
    },[])
    return (
        <div className="w-screen h-screen flex items-center justify-center relative ">
            <div className="w-auto h-auto flex justify-center items-centerp-8 rounded-l-2xl rounded-r-2xl bg-[url(https://tse1.mm.bing.net/th?id=OIP.VtIyTNqEKtwbY-DE-c-iSwHaEc&pid=Api&P=0&h=220)] no-repeat bg-cover ">
            <div className="backdrop-blur-2xl p-8 rounded-l-2xl rounded-r-3xl shadow-md w-96 h-96 ">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
                <div >
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >Login</button>
                </form>
                <p className="mt-4 text-center text-gray-300">
                    Don't have an account? 
                    <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                </p>
            </div>
            <div className="w-96 h-96 ">
                <div className="w-full h-full">

                </div>
            </div>
            </div>
        </div>
    );
};
export default loginForm;
