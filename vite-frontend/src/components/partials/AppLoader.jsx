import { Loader, Loader2, UtensilsCrossed } from "lucide-react";
import React from "react";

const AppLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
      {/* Outer Loader Circle */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Spinning Circle */}
        <div className="absolute w-32 h-32 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Logo Inside */}
        <div className="flex flex-col items-center justify-center z-10">
          <UtensilsCrossed size={32} className="text-red-600" />
          <span className="text-lg font-extrabold">
            <span className="text-red-600">Recipe</span>
            <span className="text-green-700">Realm</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
