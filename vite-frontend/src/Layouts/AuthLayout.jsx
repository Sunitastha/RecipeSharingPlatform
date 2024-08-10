import { Route, Routes } from 'react-router-dom';
import image from '../assets/images/coverpage.jpg';
import { SignIn } from '../Pages/auth/SignIn';
import { SignUp } from '../Pages/auth/SignUp';

export const AuthLayout = () =>{
    return(
        <div className="flex h-screen  items-center justify-center ">
             <div className="absolute inset-0 bg-cover bg-center filter blur-md" 
                 style={{ backgroundImage: `url(${image})` }}></div>

                 <Routes>
                 <Route path='sign-in' element={<SignIn/>} />
                 <Route path='sign-up' element={<SignUp/>}/>
                 <Route path="*" element={<div>404 Not found</div>}/>
                 </Routes>
            </div>  
    )
}