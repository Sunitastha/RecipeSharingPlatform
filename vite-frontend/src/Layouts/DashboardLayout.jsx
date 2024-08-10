import { Route, Routes } from "react-router-dom";
import { Box } from "@mantine/core";
import { AddRecipes } from "../Pages/dashboard/AddRecipes";
import { ShowRecipes } from "../Pages/dashboard/ShowRecipes";
 

export const DashboardLayout = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<div>Inside dashboard</div>} />
        <Route path="/add" element={<AddRecipes />} />
        <Route path="/fetch" element={<ShowRecipes />} />
        <Route path="/*" element={<div>404 Not found</div>} />
      </Routes>
    </Box>
  );
};
