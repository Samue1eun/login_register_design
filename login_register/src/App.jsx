import './App.css'
import accountIcon from './assets/SVGs/noun-account-3336014.svg'
import passwordIcon from './assets/SVGs/noun-lock-771672.svg'
import openEyeIcon from './assets/SVGs/noun-read-3336017.svg'

function App() {

  return (
    <>
      <div data-theme="light" className="logInCardContainer min-h-screen flex justify-center items-center">
        <div className="card w-96 bg-white shadow-2xl">
          <div className="card-body">
              {/* <div className="logInCardTitleText text-2xl text-black"> */}
              <h1 className="card-title text-4xl text-black mb-3">Log in</h1>
              {/* </div> */}
              <div className="logInCreateAccount justify-start">
                <h2 className="text-black font-light mb-3">Need a <span className="font-semibold">ShredLink</span> account? <a href="/register" className="underline text-purple-400">Create an Account</a></h2>
              </div>
              <div className="logInUsernameOrEmailContainer text-black mb-2">
                <h2 className="mb-1 font-semibold">Username or e-mail</h2>
                <label className="input input-bordered flex items-center gap-2 w-full">
                  <img src={accountIcon} className="h-4.5 w-4.5 opacity-50" alt="User icon" />
                  <input type="text" className="grow pl-1.5" placeholder="Username or e-mail" />
                </label>
              </div>
              <div className="logInPasswordContainer text-black w-full">
                <div className="logInTitleContainer flex items-center justify-between">
                  <h2 className="mb-1 font-semibold">Password</h2>
                  <div className="showEyeLogoContainer flex gap-1">
                    <img src={openEyeIcon} className="h-5 w-5"></img>
                    <h2>show</h2>
                  </div>
                </div>
                <label className="input input-bordered flex items-center gap-2 w-full mb-2">
                  <img src={passwordIcon} className="h-8 w-8 opacity-50 -ml-1.5" alt="Password icon" />
                  <input type="text" className="grow pl-0" required placeholder="•••••••"/>
                </label>
                <div className="passwordOptionsContainer flex justify-between mt-1 mb-5 w-full">
                  <a href="/forgotpassword">Forgot Password?</a>
                  <div className="rememberMeContainer flex items-center gap-1">
                    <input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
                    <h2>Remember me</h2>
                  </div>
                </div>

              </div>
              <div className="logInButtonContainer flex flex-col">
                <button className="btn btn-primary mb-2">Log In</button>
                <div className="divider">or log in with</div>
                <div className="socialButtons flex flex-col gap-1 mt-2">
                  <button className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Google
                  </button>
                  <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                    <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                    Facebook
                  </button>
                  <button className="btn bg-black text-white border-black">
                    <svg aria-label="Apple logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
                    Apple
                  </button>
                </div>
               
              </div>
              </div>
          </div>

        {/* <div className="logInCardContainer min-h-screen flex justify-center items-center bg-blue-300">
          <div className="card w-96 bg-white shadow-s">

          </div>
        </div> */}

        </div>
        <div className="anotherCard min-h-screen flex justify-center items-center">
          <div className="card w-96 bg-white shadow-sm">
            <div className="card-body">
            <h1 className="card-title text-2xl text-black">Card 2</h1>
            </div>
          </div>
        </div>



    </>
  )
}

export default App
