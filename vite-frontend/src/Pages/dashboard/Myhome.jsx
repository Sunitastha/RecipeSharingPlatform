import React from 'react';

import { NavbarMantine } from "../../components/partials/navbar/NavbarMantine";
import { Favourite } from '../../components/modules/favorite/Favourite';

import { LocalRecipes} from '../../components/modules/recipe/LocalRecipes';
import { Home } from '../../components/modules/home/Home';

export const Myhome = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex">
        <NavbarMantine />
      </div>
      <div className="flex-1  ml-7xl p-8 w-full">
        <Home/>
      
      </div>
    </div>
  );
};


