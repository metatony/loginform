
function Login(): any {

    const socials: string[] = ['src/assets/ic_baseline-apple.svg', 'src/assets/ic_sharp-facebook.svg', 'src/assets/ph_google-logo-bold.svg'];

  return (
    <div className="flex flex-col items-center justify-center  px-10 sm:hidden h-screen ">

        {/* this is the login page introduction */}
        <div className="text-center mb-20 ">
            <p className="font-bold text-2xl mb-6 text-[#1F41BB] ">Login here</p>
            <p className="font-medium text-lg w-56 text-center ">Welcome back you've been missed!</p>
        </div>

        {/* this is the form container section */}
        <div className="flex flex-col justify-center w-full">
            <form className="" action="">

                {/* email input */}
                <div className="flex p-3     bg-[#F1F4FF] space-x-5 mb-5 rounded-lg  "> 
                    
                    <input className="w-full text-xs bg-[#F1F4FF]  focus:outline-none focus:border-none   " 
                    type="text" 
                    placeholder="Email"
                    />
                </div>

                {/* password input */}
                <div className="flex p-3  bg-[#F1F4FF] space-x-5 mb-5 rounded-lg ">
                    
                    <input className="w-full text-xs bg-[#F1F4FF]  focus:outline-none focus:border-none" 
                    type="password"
                    placeholder="Password"
                     />
                </div>

                {/* forgot password */}
                <div className="text-right text-xs text-[#1F41BB] mb-5 ">
                    <p>Forgot your password?</p>
                </div>

                {/* sign in button */}
                <button className="bg-[#1F41BB] text-white rounded-xl w-full px-5 py-3 mb-5">Sign in</button>

            </form>

        </div>

        <div className="mb-10">
            <p className="text-xs font-medium">Create new account</p>
        </div>

        <div className="mb-5">
            <p className="text-xs text-[#1F41BB] font-medium">Or continue with</p>
        </div>

        {/* sign in with social media accounts */}
        <div>

            <div className="flex space-x-5">
                {
                    socials.map((socials, index) => (
                        <div className="bg-gray-100 px-5 py-2 w-16 rounded-xl flex space-y-5">
                           <img key={index} src={socials} alt={`Social Icon ${index + 1}`}  /> 
                        </div>
                        
                    ))
                }

            </div>
        </div>

    </div>
  )
}

export default Login