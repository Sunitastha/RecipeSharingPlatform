
// import React, { useState } from "react";
// import axios from "axios";
// import { Navbar } from "../../components/partials/Navbar";
// import { BackgroundImage, Box, Button, Container, TextInput, Title } from "@mantine/core";
// import google from '../../assets/images/google 1.png';
// import facebook from '../../assets/images/facebook-app-symbol 1.png';
// import { SignUp } from "./SignUp";
// import { Link, useNavigate } from "react-router-dom";
// import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
// import image from '../../assets/images/image3.jpg'

// export const SignIn = () => {
//     const navigate = useNavigate();
//     const [signIn, setSignIn] = useState({
//         username: "",
//         password: ""
//     });

//     const handleSignInInput = (event) => {
//         setSignIn({
//             ...signIn,
//             [event.target.name]: event.target.value
//         });
//     };

//     const login = async (event) => {
//         event.preventDefault();
//         console.log(signIn);
//         try {
//             const res = await axios.post("http://localhost:8083/auth/sign-in", signIn);
//             console.log(res);
//             alert("Sign-In successful!");
//             setTokenToLocalStorage(res.data.token)// Store the token using the utility function
//             navigate('/home'); // Navigate to the /add route
        

//             setSignIn({
//                 username: "",
//                 password: ""
//             });
          
//         } catch (error) {
//             alert("Sign-in failed. Please check your credentials and try again.");
//             console.error(error);
//         }
//     };

//     return (
//         <BackgroundImage src={image} style={{ height: '100vh' } } className="flex w-full h-full">
//         <Container size="sm" style={{ marginTop: '2rem' }} className="my-lg p-6 rounded-lg shadow-md border-2 border-red-200 border-opacity-100 bg-red-50 ">
          
//         <Title className="flex justify-center ">Login</Title>
//              <Box className="" mx="auto" my="auto" maw={500} mah={500}   w={1500}>

//                 {/* <img src={frame} alt=""></img> */}
//                 <div className="justify-between">
//                     {/* <div className="text-xl underline">Login</div> */}
                   
//                     <form action="" className="items-center" onSubmit={login}>
//                         <div className="text-md my-sm">
//                             {/* <div className="font-bold flex">UserName:</div> */}
//                             <TextInput 
//                                 label="UserName"
//                                 className="text-md"
//                                 type="text" 
//                                 name="username" 
//                                 placeholder="Username" 
//                                 value={signIn.username} 
//                                 onChange={handleSignInInput}
//                                 required 
//                             />
//                         </div>

//                         <div className="text-md">
//                             {/* <div className="font-bold text-md flex">Password:</div> */}
//                             <TextInput
//                                 label="Password"
//                                 className="text-md" 
//                                 type="password" 
//                                 name="password" 
//                                 placeholder="Password" 
//                                 value={signIn.password} 
//                                 onChange={handleSignInInput} 
//                                 required
//                             />
//                         </div>
//                         <br />
//                         <div className="flex flex-col">
//                         <div className="flex items-end my-sm underline">
//                           <Link to="/forgot-password" className="font-bold text-sm text-green-500 underline">Forgot password?</Link>
//                             </div>

//                     <Button  className="text-white font-bold mb-md" type="submit" variant="filled" color="green">Login</Button>
//                     </div>
//                     </form>


//         <div className="text-sm flex font-bold mb-7xl mt-md">Don't have an account ?
//               {/* <a href={<SignUp/>} className="flex ml-sm underline">SignUp </a>   */}
//               <Link to="/sign-up" className="flex ml-sm text-green-500 font-bold underline">SignUp</Link> 
//           </div>

//                 </div>
//                 </Box >
                  
//         </Container>
//         </BackgroundImage>  
//     );
// }
// // export default SignInForm;


// // variant="filled" color="orange"





// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
// import image from '../../assets/images/coverpage.jpg';
// import { Box, Button, TextInput, Title } from "@mantine/core";

// export const SignIn = () => {
//     const navigate = useNavigate();
//     const [signIn, setSignIn] = useState({
//         username: "",
//         password: ""
//     });

//      // Handle input changes
//     const handleSignInInput = (event) => {
//         setSignIn({
//             ...signIn,
//             [event.target.name]: event.target.value
//         });
//     };

//     // Handle login form submission
//     const login = async (event) => {
//         event.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:8083/auth/sign-in", signIn);
//             alert("Sign-In successful!");
//             setTokenToLocalStorage(res.data.token);
//             navigate('/fetch');
            
//             setSignIn({
//                 username: "",
//                 password: ""
//             });
//         } catch (error) {
//             alert("Sign-in failed. Please check your credentials and try again.");
//             console.error(error);
//         }
//     };

//     return (
//         <div className="relative h-screen flex items-center justify-center ">
//           <div className="absolute inset-0 bg-cover bg-center filter blur-md" 
//             style={{ backgroundImage: `url(${image})` }}>
//           </div>
//           <Box className="relative rounded-lg shadow-lg  w-full max-w-md my-lg p-6 border-2 border-green-100 border-opacity-200 ">
//                 <Title className="text-2xl font-bold text-center mb-4">Login</Title>
//             <form onSubmit={login} className="flex flex-col" >
                   
//                         <TextInput 
//                             label="Username"
//                             type="text" 
//                             name="username" 
//                             placeholder="Username" 
//                             value={signIn.username} 
//                             onChange={handleSignInInput} 
//                            className="mb-sm text-md  "
//                             required 
//                         />
                       
//                         <TextInput 
//                             label="Password"
//                             type="password" 
//                             name="password" 
//                             placeholder="Password" 
//                             value={signIn.password} 
//                             onChange={handleSignInInput} 
//                            className="mb-sm text-md  "
//                             required 
//                         />
                   
//                     <div className="flex justify-end mb-4">
//                         <Link to="/forgot-password" className="text-sm text-green-500 underline font-bold ">Forgot password?</Link>
//                     </div>
//                     <Button className="text-white font-bold mb-sm " type="submit" variant="filled" color="green" >Login</Button>
//                     <div className="text-sm text-center font-bold">
//                           Don't have an account? 
//                         <Link to="/sign-up" className="ml-1 underline font-bold text-green-500 ml-sm">Sign Up</Link>
//                     </div>

//                 </form>   
//              </Box>
//             </div>
//     );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
// import { Box, Button, TextInput, Title } from "@mantine/core";
// import { useDispatch } from "react-redux";
// import { PostRequest } from "../../plugins/https";
// import { setAuthorizationHeader } from "../../utils/auth.helper";
// import { setToken } from "../../store/modules/auth/action";
// import image from '../../assets/images/coverpage.jpg';

// export const SignIn = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [signIn, setSignIn] = useState({
//         username: "",
//         password: ""
//     });

//     // Handle input changes
//     const handleSignInInput = (event) => {
//         setSignIn({
//             ...signIn,
//             [event.target.name]: event.target.value
//         });
//     };

//     // Handle login form submission
//     const login = async (event) => {
//         event.preventDefault();
//         try {
//             const res = await PostRequest("auth/sign-in", signIn);
//             alert("Sign-In successful!"); // Alert for successful login
//             setTokenToLocalStorage(res.data.token); // Save token to local storage
//             setAuthorizationHeader(res.data.token);
//             localStorage.setItem('user',JSON.stringify(user));//store user info in localstorage
//             navigate('/home'); // Redirect to desired page after successful login
            
//             setSignIn({
//                 username: "",
//                 password: ""
//             });
//             dispatch(setToken(res.data.token));
//         } catch (error) {
//             alert("Sign-in failed. Please check your credentials and try again."); // Alert for failed login
//             console.error(error);
//         }
//     };

//     return (
//         <div className="flex h-screen  items-center justify-center ">
//         <div className="absolute inset-0 bg-cover bg-center filter blur-md" 
//             style={{ backgroundImage: `url(${image})` }}></div>

       
//             <Box className="relative rounded-lg shadow-lg  w-full max-w-md my-lg p-6 border-2 border-green-100 border-opacity-200 ">
//                 <Title className="text-2xl font-bold text-center mb-4">Login</Title>
//                 <form onSubmit={login} className="flex flex-col">
//                     <TextInput 
//                         label="Username"
//                         type="text" 
//                         name="username" 
//                         placeholder="Username" 
//                         value={signIn.username} 
//                         onChange={handleSignInInput} 
//                         className="mb-sm text-md"
//                         required 
//                     />
//                     <TextInput 
//                         label="Password"
//                         type="password" 
//                         name="password" 
//                         placeholder="Password" 
//                         value={signIn.password} 
//                         onChange={handleSignInInput} 
//                         className="mb-sm text-md"
//                         required 
//                     />
//                     <div className="flex justify-end mb-4">
//                         <Link to="/forgot-password" className="text-sm text-green-500 underline font-bold ">Forgot password?</Link>
//                     </div>
//                     <Button className="text-white font-bold mb-sm" type="submit" variant="filled" color="green">Login</Button>
//                     <div className="text-sm text-center font-bold">
//                         Don't have an account? 
//                         <Link to="/sign-up" className="ml-1 underline font-bold text-green-500 ml-sm">Sign Up</Link>
//                     </div>
//                 </form>   
//             </Box>
//        </div>
//     );
// };


import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
import { Box, Button, TextInput, Title } from "@mantine/core";
import { useDispatch } from "react-redux";
import { PostRequest } from "../../plugins/https";
import { setAuthorizationHeader } from "../../utils/auth.helper";
import { setToken } from "../../store/modules/auth/action";
import image from '../../assets/images/coverpage.jpg';

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState({
        username: "",
        password: ""
    });

    // Handle input changes
    const handleSignInInput = (event) => {
        setSignIn({
            ...signIn,
            [event.target.name]: event.target.value
        });
    };

    // Handle login form submission
    const login = async (event) => {
        event.preventDefault();
        try {
            const res = await PostRequest("auth/sign-in", signIn);
            alert("Sign-In successful!"); // Alert for successful login
            setTokenToLocalStorage(res.data.token); // Save token to local storage
            setAuthorizationHeader(res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data.user));//store user info in localstorage
            navigate('/home'); // Redirect to desired page after successful login
            
            setSignIn({
                username: "",
                password: ""
            });
            dispatch(setToken(res.data.token));
        } catch (error) {
            alert("Sign-in failed. Please check your credentials and try again."); // Alert for failed login
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen  items-center justify-center ">
        <div className="absolute inset-0 bg-cover bg-center filter blur-md" 
            style={{ backgroundImage: `url(${image})` }}></div>

       
            <Box className="relative rounded-lg shadow-lg  w-full max-w-md my-lg p-6 border-2 border-green-100 border-opacity-200 ">
                <Title className="text-2xl font-bold text-center mb-4">Welcome back</Title>
                <form onSubmit={login} className="flex flex-col">
                    <TextInput 
                        label="Username"
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={signIn.username} 
                        onChange={handleSignInInput} 
                        className="mb-sm text-md"
                        required 
                    />
                    <TextInput 
                        label="Password"
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={signIn.password} 
                        onChange={handleSignInInput} 
                        className="mb-sm text-md"
                        required 
                    />
                    <div className="flex justify-end mb-4">
                        <Link to="/forgot-password" className="text-sm text-green-500 underline font-bold ">Forgot password?</Link>
                    </div>
                    <Button className="text-white font-bold mb-sm" type="submit" variant="filled" color="green">Login</Button>
                    <div className="text-sm text-center font-bold">
                        Don't have an account? 
                        <Link to="/sign-up" className="ml-1 underline font-bold text-green-500 ml-sm">Sign Up</Link>
                    </div>
                </form>   
            </Box>
       </div>
    );
};
