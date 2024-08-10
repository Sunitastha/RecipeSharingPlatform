// import { useState } from 'react';
// import React from 'react';
// import { Container, Group, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import classes from './NavbarMantine.module.css';
// import { Link, NavLink } from 'react-router-dom';
// // import './NavbarMantine.module.css';

// const navItems = [
//     { label: "Home", link: '/home' },
//     { label: "Profile", link: '/profile' },
//     { label: "ShowRecipes", link: '/retrive' },
//     { label: "Search", link: '/search' },
//     { label: "AddRecipes", link: '/add' },
//     { label: "Favourite", link: '/favourite' },
// ];

// export function NavbarMantine() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const [active, setActive] = useState(navItems[0].link);

//   const items = navItems.map((link) => (
//     <NavLink
//       key={link.label}
//       to={link.link}
//       className="{classes.link} font-bold mx-md "
//       data-active={active === link.link || undefined}
//       onClick={(event) => {
//         // event.preventDefault();
//       }} >
//       {link.label}
      
//     </NavLink>
//   ));

//   return (
//     <nav className="flex justify-between items-center left-none top-none fixed w-full p-4 bg-white">
//       <Container size="md" className="flex justify-between items-center {classes.inner}">
//         <div className="text-lg font-bold  mr-4xl ">
//           <span className="flex">Recipe </span>
//           <span className="flex">Realm</span>
//         </div>
//         <div className={`${classes.navItems} flex items-center`}>
//           <Group gap={5} className="hidden sm:flex" visibleFrom="xs">
//             {items}
//           </Group>
//           <Burger opened={opened} onClick={toggle} className="sm:hidden" size="sm"  hiddenFrom="xs" />
//         </div>
//       </Container>
//     </nav>
//   );
// }

// import { useState } from 'react';
// import React from 'react';
// import { Container, Group, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { Link, NavLink } from 'react-router-dom';
// import {
//   IconHome2,
//   IconUser,
//   IconDeviceDesktopAnalytics,
//   IconSearch,
//   IconPlus,
//   IconHeart,
//   IconArrowAutofitRight,
// } from '@tabler/icons-react';
// import classes from './NavbarMantine.module.css';

// const navItems = [
//   { label: "Home", link: '/home', icon: IconHome2 },
//   { label: "Profile", link: '/profile', icon: IconUser },
//   { label: "ShowRecipes", link: '/retrive', icon: IconDeviceDesktopAnalytics },
//   // { label: "Search", link: '/search', icon: IconSearch },
//   { label: "AddRecipes", link: '/add', icon: IconPlus },
//   // { label: "Favourite", link: '/favourite', icon: IconHeart },
//   { label: "LogOut", link: '/log-out', icon: IconArrowAutofitRight },
// ];

// export function NavbarMantine() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const [active, setActive] = useState(navItems[0].link);

//   const items = navItems.map((item) => (
//     <NavLink
//       key={item.label}
//       to={item.link}
//       className={`${classes.link}`}
//       data-active={active === item.link || undefined}
//       onClick={() => setActive(item.link)}
//     >
//       <item.icon className={classes.icon} />
//     </NavLink>
//   ));

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.logo}>
//         <div className={classes.logoText}>
//           <span className={classes.redText}>Recipe</span> <br/>
//           <span className={classes.greenText}>Realm</span>
//         </div>
//       </div>
//       <div className={classes.wrapper}>
//         <aside className={classes.aside}>
//           <Burger opened={opened} onClick={toggle} size="sm" className="sm:hidden" />
//         </aside>
//         <main className={classes.main}>
//           <Group direction="row" spacing="md">
//             {items}
//           </Group>
//         </main>
//       </div>
//     </nav>
//   );
// }


// import React, { useState } from 'react';
// import { Container, Group, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { NavLink } from 'react-router-dom';
// import {
//   IconHome2,
//   IconUser,
//   IconDeviceDesktopAnalytics,
//   IconPlus,
//   IconArrowAutofitRight,
// } from '@tabler/icons-react';
// import classes from './NavbarMantine.module.css';

// const navItems = [
//   { label: "Home", link: '/home', icon: IconHome2 },
//   { label: "Profile", link: '/profile', icon: IconUser },
//   { label: "ShowRecipes", link: '/retrive', icon: IconDeviceDesktopAnalytics },
//   { label: "AddRecipes", link: '/add', icon: IconPlus },
//   { label: "LogOut", link: '/log-out', icon: IconArrowAutofitRight },
// ];

// export function NavbarMantine() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const [active, setActive] = useState(navItems[0].link);

//   const items = navItems.map((item) => (
//     <NavLink
//       key={item.label}
//       to={item.link}
//       className={`${classes.link}`}
//       data-active={active === item.link || undefined}
//       onClick={() => setActive(item.link)}
//     >
//       <item.icon className={classes.icon} />
//     </NavLink>
//   ));

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.logo}>
//         <div className={classes.logoText}>
//           <span className={classes.redText}>Recipe</span> <br/>
//           <span className={classes.greenText}>Realm</span>
//         </div>
//       </div>
//       <div className={classes.wrapper}>
//         <aside className={classes.aside}>
//           <Burger opened={opened} onClick={toggle} size="sm" className="sm:hidden" />
//         </aside>
//         <main className={classes.main}>
//           <Group direction="row" spacing="md">
//             {items}
//           </Group>
//         </main>
//       </div>
//     </nav>
//   );
// }


// src/components/partials/navbar/NavbarMantine.js
import React, { useState } from 'react';
import { Container, Group, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/Logo7.png'
import {
  IconHome2,
  IconUser,
  IconDeviceDesktopAnalytics,
  IconPlus,
  IconArrowAutofitRight,
} from '@tabler/icons-react';
import classes from './NavbarMantine.module.css';

const navItems = [
  { label: "Home", link: '/home', icon: IconHome2 },
  { label: "Profile", link: '/profile', icon: IconUser },
  { label: "ShowRecipes", link: '/fetch', icon: IconDeviceDesktopAnalytics },
  { label: "AddRecipes", link: '/add', icon: IconPlus },
  { label: "LogOut", link: '/log-out', icon: IconArrowAutofitRight },
];

export function NavbarMantine() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(navItems[0].link);

  const items = navItems.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={`${classes.link}`}
      data-active={active === item.link || undefined}
      onClick={() => setActive(item.link)}
    >
      <item.icon className={classes.icon} />
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Image src={logo} className={classes.logoImage}/>
        {/* <div className={classes.logoText}>
          <span className={classes.redText}>Recipe</span> <br/>
          <span className={classes.greenText}>Realm</span>
        </div> */}
      </div>
      <div className={classes.wrapper}>
     

        <aside className={classes.aside}>
          <Burger opened={opened} onClick={toggle} size="sm" className="sm:hidden" />
        </aside>
        <main className={classes.main}>
          <Group direction="row" spacing="md">
            {items}
          </Group>
        </main>
      </div>
    </nav>
  );
}
