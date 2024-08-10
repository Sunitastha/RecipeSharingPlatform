// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { NavbarMantine } from '../components/partials/navbar/NavbarMantine';

// export const LogOut = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         const userConfirmed = window.confirm("Are you sure you want to log out?");
//         if (userConfirmed) {
//             // Add your logout logic here, e.g., clearing user data, tokens, etc.
//             navigate('/sign-in'); // Redirect to sign-in page after logout
//         } else {
//             navigate('/home'); // Redirect to home if cancel
//         }
//     };

//     useEffect(() => {
//         handleLogout();
//     }, []); // Empty dependency array ensures this runs only once after the initial render

//     return (
//         <>
//             <section className='flex'>
//                 <NavbarMantine />
//                 <main className='flex-1 ml-72 p-8'>
//                     Logging out...
//                 </main>
//             </section>
//         </>
//     );
// };

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../utils/auth.helper';
import { NavbarMantine } from '../../partials/navbar/NavbarMantine';



export const LogOut = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const userConfirmed = window.confirm("Are you sure you want to log out?");
        if (userConfirmed) {
            // Call logout function to clear token and perform cleanup
            logout();
            // Redirect to sign-in page after logout
            navigate('/sign-in');
        } else {
            // Redirect to home page if cancel
            navigate('/home');
        }
    };

    useEffect(() => {
        handleLogout(); // Automatically initiate logout on component mount
    }, []); // Empty dependency array ensures it runs only once

    return (
        <>
            <section className='flex'>
                <NavbarMantine />
                <main className='flex-1 ml-72 p-8'>
                    Logging out...
                </main>
            </section>
        </>
    );
};


