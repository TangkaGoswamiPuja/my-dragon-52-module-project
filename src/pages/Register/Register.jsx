import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth";




const Register = () => {
    const {createUser}= useContext(AuthContext)


    const handleRegi = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form1 = new FormData(e.currentTarget)

        const name = form1.get('name')
        const email = form1.get('email')
        const password = form1.get('password')
        const photo = form1.get('photo')
        console.log(name, photo, email, password)

       
createUser(email,password)
.then(result =>{console.log(result.user)})
.catch(error=>{console.error(error)})




    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegi} className="card-body">
                        <h2>please login</h2>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">photo url </span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                        </div><div className="form-control">

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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already have a account? <Link to="/login">plz login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;