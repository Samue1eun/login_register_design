import './App.css'

function App() {

  return (
    <>
      <div className="logInCardContainer w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="logInCardTitleText text-2xl">
          <h1>Log in</h1>
        </div>
        <div className="logInCreateAccount justify-start">
          <h2>Need a ShredLink account? <a className="underline">Create an Account</a></h2>
        </div>
        <div className="logInUsernameOrEmailContainer">
          <h2>Username or e-mail</h2>
          {/* enter input box here */}
        </div>
        <div className="logInPasswordContainer">
          <h2>Password</h2>
          {/* enter password box here */}
          <a>Forgot Password?</a>
          <h2>Remember me</h2>
        </div>

      </div>

    </>
  )
}

export default App
