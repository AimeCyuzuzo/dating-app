// import { FacebookOutlined, Google, Instagram } from "@mui/icons-material"
import { Twitter, Facebook, Google, Instagram } from "react-bootstrap-icons"
import { Link } from "react-router-dom"


function SignUp() {
  return (
    <div className='container-fluid'>
        <div className="row flex justify-center py-4">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="m-3 use-google flex p-2 bg-sky-700 rounded-2xl group hover:bg-sky-800 cursor-pointer">
                    <Google className="group-hover:text-orange-600 group-hover:outline-1 group-hover:outline-dashed group-hover:border-blue-800 group-hover:border-2 group-hover:outline-green-700" style={{"fontSize":"xx-large"}} /> <div className="px-2 py-1 group-hover:text-sky-200">Sign up with Google</div>
                </div>
                <div className="m-3 use-google flex p-2 bg-sky-700 rounded-2xl group hover:bg-sky-800 cursor-pointer">
                    <Facebook className="group-hover:text-sky-600 group-hover:bg-sky-50 group-hover:p-1 group-hover:outline-1 group-hover:outline-dashed group-hover:border-blue-800 group-hover:border-2 group-hover:outline-green-700" style={{"fontSize":"xx-large"}} /> <div className="px-2 py-1 group-hover:text-sky-200">Sign up with Facebook</div>
                </div>
                <div className="m-3 use-google flex p-2 bg-sky-700 rounded-2xl group hover:bg-sky-800 cursor-pointer">
                    <Instagram className="group-hover:text-red-700 group-hover:bg-sky-50 group-hover:p-1 group-hover:outline-1 group-hover:outline-dashed group-hover:border-blue-800 group-hover:border-2 group-hover:outline-green-700" style={{"fontSize":"xx-large"}} /> <div className="px-2 py-1 group-hover:text-sky-200">Sign up with Instagram</div>
                </div>
                <div className="m-3 use-google flex p-2 bg-sky-700 rounded-2xl group hover:bg-sky-800 cursor-pointer">
                    <Twitter className="group-hover:text-sky-700 group-hover:bg-sky-50 group-hover:p-1 group-hover:outline-1 group-hover:outline-dashed group-hover:border-blue-800 group-hover:border-2 group-hover:outline-green-700" style={{"fontSize":"xx-large"}} /> <div className="px-2 py-1 group-hover:text-sky-200">Sign up with Twitter</div>
                </div>
            </div>
            <div className="col-xl-6 pt-5 pb-10 col-lg-6 col-md-6 col-sm-12 col-12 border-l-4 border-cyan-300">
                <h3>Sign up</h3>
                <div>
                    <div className="m-2">
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" className="border-none outline-none rounded text-dark p-1" />
                    </div>
                    <div className="m-2">
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" className="border-none outline-none rounded text-dark p-1" />
                    </div>
                    <div className="content-center justify-center px-6 pt-3 ">
                        <button className="bg-sky-300 text-cyan-800 py-1 px-2 rounded-md hover:bg-sky-600 hover:text-sky-50" style={{"width":"20px !important"}}>Sign up</button>
                    </div>
                </div>
                <div className="py-2 px-3">
                    <p className="text-sky-50 underline cursor-pointer hover:text-sky-500">Forgot password?</p>
                    <p>Already have an account?  <span className="text-sky-600 underline cursor-pointer hover:text-sky-500"><Link to="/create-account">Log in</Link></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp