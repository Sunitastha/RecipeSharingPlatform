import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

export const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    previousPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  //   const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const payload = {
        email: JSON.parse(localStorage.getItem("user")).email,
        previousPassword: passwords.previousPassword,
        newPassword: passwords.newPassword,
        confirmPassword: passwords.confirmPassword,
      };
      console.log(payload);
      const response = await axios.post(
        "http://localhost:8083/auth/change-password",
        payload
      );
      setMessage("Password has been reset successfully.");
      setPasswords({
        previousPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      if (response.data.message === "Password reset successfully") {
        setMessage("Password has been reset successfully.");
        navigate("/profile");
      } else {
        setMessage("Failed to reset password. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to reset password. Please try again.");
      setErrors(error.response.data);
    } finally {
      setLoading(false);
      setPasswords({
        previousPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        {message && (
          <div className="text-center mb-4 text-green-500">{message}</div>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="previousPassword"
            >
              Previous Password:
            </label>
            <TextInput
              className="text-md px-3 py-2  w-full focus:outline-0 focus:ring-0 "
              type="password"
              name="previousPassword"
              placeholder="Previous password"
              value={passwords.previousPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password:
            </label>
            <TextInput
              className="text-md px-3 py-2  w-full focus:outline-0 focus:ring-0 "
              type="password"
              name="newPassword"
              placeholder="New password"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <TextInput
              className="text-md px-3 py-2  w-full focus:outline-0 focus:ring-0 "
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={passwords.confirmPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading ? (
              <>
                <Loader className="animate-spin text-green-800" size="sm" />
                <span className="ml-2">Changing password...</span>
              </>
            ) : errors.message ? (
              errors.message
            ) : (
              "Confirm"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};
