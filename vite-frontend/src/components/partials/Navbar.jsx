
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Navbar =()=>{
    const counter = useSelector(state=> state.countReducer.count);
   // const token = useSelector((state)=> state.tokenReducer.token);
    
    const navItems = [
        {label: "Home", to:'/home'},
        {label: "Profile", to:'/profile'},
        {label: "ShowRecipes", to:'/retrive'},
        {label: "Search", to:'/search'},
        {label: "AddRecipes", to:'/add'},
        {label: "Favourite", to:'/favourite'},
        
        ]
    return <nav className="flex justify-between left-none top-none fixed w-full items-center bold bg-white">
    <div className="logo text-lg bold flex">
    
         <span className="flex ">Recipe</span>
         <span className="flex">Realm</span>
         {/* ({counter}) */}
        </div>
        <div className="nav-items flex">
            {navItems.map((v,key)=>(
                <NavLink to={v.to} className="nav-item p-sm m-sm bold btn" key={key}>{v.label}</NavLink>
            
                
            ))}

        </div>
        
     </nav>
    
}