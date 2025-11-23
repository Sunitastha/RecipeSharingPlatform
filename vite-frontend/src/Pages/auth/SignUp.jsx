import axios from "axios";
import { useState } from "react";
import { Box, Button, Container, Text, TextInput, Title } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
import image from "../../assets/images/coverpage.jpg";
import { useDispatch } from "react-redux";
import { PostRequest } from "../../plugins/https";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUps, setSignUps] = useState([]);
  const [signUp, setSignUp] = useState({
    username: "",
    fullName: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.username =
      signUp.username.length < 2 ? "Name must have at least 2 letters" : "";
    tempErrors.fullName =
      signUp.fullName.length < 6
        ? "Full name must have at least 6 letters"
        : "";
    tempErrors.gender = signUp.gender ? "" : "Gender is required";
    tempErrors.age = signUp.age ? "" : "Age is required";
    tempErrors.phone = /^\d{10}$/.test(signUp.phone)
      ? ""
      : "You must enter a 10-digit number";
    tempErrors.email = /^\S+@\S+$/.test(signUp.email) ? "" : "Invalid email";
    tempErrors.password =
      signUp.password.length >= 4
        ? ""
        : "Password must have at least 4 letters";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSignUpInput = (event) => {
    setSignUp({
      ...signUp,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      setLoading(true);
      const res = await PostRequest("auth/sign-up", signUp);
      setSignUps([...signUps, res.data.data]);
      setSignUp({
        username: "",
        fullName: "",
        gender: "",
        age: "",
        phone: "",
        email: "",
        password: "",
      });
      navigate("/sign-in"); // Navigate to the /sign-in route

      // Clear the form after successful registration

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div className="flex h-screen  items-center justify-center ">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <Box
        size="xl"
        className="relative rounded-lg  w-full max-w-xl my-md p-6 shadow-lg border-2 border-green-100 border-opacity-200 bg-white"
      >
        <div className="mb-md">
          <Title>Create an Account</Title>
          <p>Sign up to start your journey with us.</p>
        </div>

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

        <form className="flex flex-col w-full" onSubmit={register}>
          <div className="grid grid-cols-2 gap-6 ">
            <TextInput
              label="Username"
              className="mb-sm text-md  "
              type="text"
              name="username"
              placeholder="Username"
              value={signUp.username}
              onChange={handleSignUpInput}
              error={errors.username}
              required
            />
            <TextInput
              label="Full Name"
              className="mb-sm text-md "
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={signUp.fullName}
              onChange={handleSignUpInput}
              error={errors.fullName}
              required
            />
            <div>
              <label className=" mb-2 text-sm font-medium text-gray-900">
                Gender:
              </label>
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="gender"
                value={signUp.gender}
                placeholder="gender"
                onChange={handleSignUpInput}
                required
              >
                <option value="" disabled></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>

              {errors.gender && (
                <p className="text-red-500 text-md mt-1">{errors.gender}</p>
              )}
            </div>

            <TextInput
              label="Age"
              className="mb-sm text-md"
              type="number"
              name="age"
              placeholder="Age"
              value={signUp.age}
              onChange={handleSignUpInput}
              error={errors.age}
              required
            />
            <TextInput
              label="Phone Number"
              className="mb-sm text-md"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={signUp.phone}
              onChange={handleSignUpInput}
              error={errors.phone}
              required
            />
            <TextInput
              label="Email"
              className="mb-sm text-md"
              type="email"
              name="email"
              placeholder="Email"
              value={signUp.email}
              onChange={handleSignUpInput}
              error={errors.email}
              required
            />
            <TextInput
              label="Password"
              className="mb-sm text-md"
              type="password"
              name="password"
              placeholder="Password"
              value={signUp.password}
              onChange={handleSignUpInput}
              error={errors.password}
              required
            />
          </div>
          <Button
            className="flex text-white font-bold mb-sm w-full "
            type="submit"
            variant="filled"
            color="green"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="animate-spin text-green-800" size="sm" />
                <span className="ml-2">Registering...</span>
              </>
            ) : (
              "Register"
            )}
          </Button>
          <div className="text-sm text-center font-bold">
            Already have an account?
            <Link
              to="/sign-in"
              className="underline font-bold text-green-500 ml-sm"
              disabled={loading}
            >
              Sign In
            </Link>
          </div>
        </form>
      </Box>
    </div>
  );
};
