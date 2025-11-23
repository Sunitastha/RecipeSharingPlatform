import React from "react";
import { UtensilsCrossed } from "lucide-react";

export const AppLogo = () => (
  <div className="flex items-center space-x-2">
    <UtensilsCrossed size={30} className="text-red-600" />
    <span className="text-2xl font-extrabold">
      <span className="text-red-600">Recipe</span>
      <span className="text-green-700">Realm</span>
    </span>
  </div>
);
