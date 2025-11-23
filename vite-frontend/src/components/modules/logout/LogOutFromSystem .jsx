import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../utils/auth.helper";
import home from "../../../assets/images/image3.jpg";
import { Title, Text, Button, Group, Box } from "@mantine/core";
import { IconLogout, IconArrowLeft } from "@tabler/icons-react";
import { Loader } from "lucide-react";

export const LogOutFromSystem = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleConfirmLogout = () => {
    try {
      setLoading(true);
      logout();
      navigate("/sign-in", { replace: true }); // ✅ This is the correct way
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setErrors(
        error.response?.data || { message: "An unexpected error occurred." }
      );
    }
  };

  const handleCancelLogout = () => {
    navigate("/home");
  };

  return (
    <div className="flex h-screen  items-center justify-center ">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${home})` }}
      ></div>
      <Box className="relative rounded-lg shadow-lg  w-full max-w-md my-lg p-6 border-2 border-green-100 border-opacity-200 bg-white ">
        <Title order={2} mb="xs">
          Confirm Logout
        </Title>

        <Text size="md" c="dimmed" mb="xl">
          Are you sure you want to end your current session? You will need to
          sign in again to access your account.
        </Text>

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
        {/* Action Buttons */}
        <Group justify="center" gap="md">
          <Button
            color="green"
            leftSection={<IconArrowLeft size={18} />}
            onClick={handleCancelLogout}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            color="red"
            leftSection={<IconLogout size={18} />}
            onClick={handleConfirmLogout}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="animate-spin text-red-800" size="sm" />
                <span className="ml-2">Logging out...</span>
              </>
            ) : (
              "Log Out"
            )}
          </Button>
        </Group>
      </Box>
    </div>
  );
};
