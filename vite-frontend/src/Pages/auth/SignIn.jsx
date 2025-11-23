// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
// import { Box, Button, TextInput, Title } from "@mantine/core";
// import { useDispatch } from "react-redux";
// import { PostRequest } from "../../plugins/https";
// import { setAuthorizationHeader } from "../../utils/auth.helper";
// import { setToken } from "../../store/modules/auth/action";
// import image from "../../assets/images/coverpage.jpg";

// export const SignIn = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [signIn, setSignIn] = useState({
//     username: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   // Handle input changes
//   const handleSignInInput = (event) => {
//     setSignIn({
//       ...signIn,
//       [event.target.name]: event.target.value,
//     });
//   };

//   // Handle login form submission
//   const login = async (event) => {
//     event.preventDefault();
//     try {
//       setLoading(true);
//       const res = await PostRequest("auth/sign-in", signIn);
//       setLoading(false);
//       setTokenToLocalStorage(res.data.token); // Save token to local storage
//       setAuthorizationHeader(res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user)); //store user info in localstorage
//       navigate("/home"); // Redirect to desired page after successful login

//       setSignIn({
//         username: "",
//         password: "",
//       });
//       dispatch(setToken(res.data.token));
//     } catch (error) {
//       setLoading(false);
//       setErrors(error.response.data);
//     }
//   };

//   return (
//     <div className="flex h-screen  items-center justify-center  ">
//       <div
//         className="absolute inset-0 bg-cover bg-center filter blur-md"
//         style={{ backgroundImage: `url(${image})` }}
//       ></div>

//       <Box className="relative rounded-lg shadow-lg  w-full max-w-md my-lg p-6 border-2 border-green-100 border-opacity-200 bg-white ">
//         <Title className="text-2xl font-bold text-center mb-4">
//           Welcome back
//         </Title>
//         <form onSubmit={login} className="flex flex-col">
//           <TextInput
//             label="Username"
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={signIn.username}
//             onChange={handleSignInInput}
//             className="mb-sm text-md"
//             required
//           />
//           <TextInput
//             label="Password"
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={signIn.password}
//             onChange={handleSignInInput}
//             className="mb-sm text-md"
//             required
//           />
//           <div className="flex justify-end mb-4">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-green-500 underline font-bold "
//               disabled={loading}
//             >
//               Forgot password?
//             </Link>
//           </div>
//           <Button
//             className="text-white font-bold mb-sm"
//             type="submit"
//             variant="filled"
//             color="green"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <Loader color="green" size="sm" />
//                 <span className="ml-2">Logging in...</span>
//               </>
//             ) : (
//               "Login"
//             )}
//           </Button>
//           <div className="text-sm text-center font-bold">
//             Don't have an account?
//             <Link
//               to="/sign-up"
//               className=" underline font-bold text-green-500 ml-sm"
//               disabled={loading}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </form>
//       </Box>
//     </div>
//   );
// };

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
import { Box, Button, TextInput, Title, Text } from "@mantine/core";
import { useDispatch } from "react-redux";
import { PostRequest } from "../../plugins/https";
import { setAuthorizationHeader } from "../../utils/auth.helper";
import { setToken } from "../../store/modules/auth/action";
import image from "../../assets/images/coverpage.jpg";
import { Loader } from "lucide-react";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  // Assuming errors state holds an object { message: "...", fields: {...} }
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleSignInInput = (event) => {
    setSignIn({
      ...signIn,
      [event.target.name]: event.target.value,
    });
    // Clear field-specific errors if necessary, but we'll focus on server message here.
  };

  // Handle login form submission
  const login = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      // Clear previous errors before API call
      setErrors({});

      const res = await PostRequest("auth/sign-in", signIn);

      setTokenToLocalStorage(res.data.token); // Save token to local storage
      setAuthorizationHeader(res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); //store user info in localstorage

      // Dispatch token to Redux store
      dispatch(setToken(res.data.token));
      setSignIn({
        email: "",
        password: "",
      });
      // Redirect to desired page after successful login
      navigate("/home");
      setLoading(false);
      // Clear local form state (optional, as navigation happens)
    } catch (error) {
      setLoading(false);
      // Ensure we catch and set the correct structure of the error response
      // Assuming server returns error.response.data with a 'message' field
      setErrors(
        error.response?.data || { message: "An unexpected error occurred." }
      );
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Background Image setup */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Sign In Box */}
      <Box className="relative rounded-lg shadow-lg w-full max-w-md my-lg p-6 border-2 border-green-100 border-opacity-200 bg-white">
        <Title className="text-2xl font-bold text-center mb-4">
          Welcome back
        </Title>

        {/* ✅ Error Display */}
        {errors.message && (
          <Text
            color="red"
            size="sm"
            ta="center"
            mb="md"
            className="p-2 border border-red-300 bg-red-50 rounded"
          >
            {errors.message}
          </Text>
        )}

        <form onSubmit={login} className="flex flex-col">
          <TextInput
            label="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={signIn.email}
            onChange={handleSignInInput}
            className="mb-sm text-md"
            required
            // Display field-specific error if available (advanced)
            // error={errors.fields?.username}
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
            // error={errors.fields?.password}
          />

          <Button
            className="text-white font-bold mb-sm"
            type="submit"
            variant="filled"
            color="green"
            disabled={loading}
          >
            {loading ? (
              <>
                {/* Loader is now imported and correctly used */}
                <Loader className="animate-spin text-green-800" size="sm" />
                <span className="ml-2">Logging in...</span>
              </>
            ) : (
              "Login"
            )}
          </Button>

          <div className="text-sm text-center font-bold">
            Don't have an account?
            <Link
              to="/sign-up"
              className="underline font-bold text-green-500 ml-sm"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </Box>
    </div>
  );
};
