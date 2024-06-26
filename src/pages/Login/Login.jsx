import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const handleLogin = e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form= new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email ,password)
   signIn (email,password)
   .then(result => {
    console.log(result.user)
   })
   .catch (error=>console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
           
            <div className="hero min-h-screen bg-base-200">
 
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h2>please login</h2>
        <div className="form-control">
           
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">don't have a account? <Link to="/regis">plz register</Link></p>
    </div>
  </div>
</div>
       
    );
};

export default Login;