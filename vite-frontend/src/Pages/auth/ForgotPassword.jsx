import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import axios from "axios";

export const ForgotPassword = () => {
  const [passwords, setPasswords] = useState({
    previousPassword: "",
    newPassword: ""
  });
  const [message, setMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8083/auth/reset-password", passwords);
      setMessage("Password has been reset successfully.");
      setPasswords({
        previousPassword: "",
        newPassword: ""
      });
    } catch (error) {
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        {message && <div className="text-center mb-4 text-green-500">{message}</div>}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="previousPassword">Previous Password:</label>
            <TextInput
              className="text-md px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="previousPassword"
              placeholder="Previous password"
              value={passwords.previousPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="newPassword">New Password:</label>
            <TextInput
              className="text-md px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="newPassword"
              placeholder="New password"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Confirm
          </Button>
        </form>
      </div>
    </section>
  );
};
