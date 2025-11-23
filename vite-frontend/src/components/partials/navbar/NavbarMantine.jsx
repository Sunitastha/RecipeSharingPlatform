// // import React, { useState } from "react";
// // import { Container, Group, Burger, Image, Text } from "@mantine/core";
// // import { useDisclosure } from "@mantine/hooks";
// // import { NavLink } from "react-router-dom";
// // // import logo from "../../../assets/images/Logo7.png"; // Assuming logo is imported if used
// // import {
// //   IconHome2,
// //   IconUser,
// //   IconDeviceDesktopAnalytics,
// //   IconPlus,
// //   IconArrowAutofitRight,
// // } from "@tabler/icons-react";
// // import classes from "./NavbarMantine.module.css";
// // import { AppLogo } from "../AppLogo";

// // const navItems = [
// //   { id: 1, label: "Home", link: "/home", icon: IconHome2 },
// //   { id: 2, label: "Profile", link: "/profile", icon: IconUser },
// //   {
// //     id: 3,
// //     label: "Show Recipes",
// //     link: "/fetch",
// //     icon: IconDeviceDesktopAnalytics,
// //   },
// //   { id: 4, label: "Add Recipes", link: "/add", icon: IconPlus },
// //   { id: 5, label: "Log Out", link: "/log-out", icon: IconArrowAutofitRight },
// // ];

// // export function NavbarMantine() {
// //   const [opened, { toggle }] = useDisclosure(false);
// //   const [active, setActive] = useState(navItems[0].link);

// //   // Map function now includes the item's label text
// //   const items = navItems.map((item) => (
// //     <NavLink
// //       key={item.label}
// //       to={item.link}
// //       className={classes.link}
// //       onClick={() => setActive(item.link)}
// //       data-active={active === item.link || undefined}
// //     >
// //       <item.icon className={classes.icon} />
// //       {item.label} {/* Display the text label next to the icon */}
// //     </NavLink>
// //   ));

// //   return (
// //     // Use the .header class as the main container
// //     <header className={classes.header}>
// //       <div className={classes.logo}>
// //         <AppLogo />
// //       </div>

// //       <Group className={classes.navItems}>{items}</Group>

// //       <Burger
// //         opened={opened}
// //         onClick={toggle}
// //         size="sm"
// //         className={classes.burger}
// //       />
// //     </header>
// //   );
// // }

// import React, { useState } from "react";
// import { Group, Burger } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { NavLink } from "react-router-dom";
// import {
//   IconHome2,
//   IconUser,
//   IconDeviceDesktopAnalytics,
//   IconPlus,
//   IconArrowAutofitRight,
// } from "@tabler/icons-react";
// import classes from "./NavbarMantine.module.css";
// import { AppLogo } from "../AppLogo";

// const navItems = [
//   { id: 1, label: "Home", link: "/home", icon: IconHome2 },
//   // {
//   //   id: 2,
//   //   label: "Show Recipes",
//   //   link: "/fetch",
//   //   icon: IconDeviceDesktopAnalytics,
//   // },
//   { id: 2, label: "Add Recipes", link: "/recipes-add", icon: IconPlus },

//   { id: 3, label: "Profile", link: "/profile", icon: IconUser },

//   { id: 4, label: "Log Out", link: "/log-out", icon: IconArrowAutofitRight },
// ];

// export function NavbarMantine() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const [active, setActive] = useState(navItems[0].link);

//   const items = navItems.map((item) => (
//     <NavLink
//       key={item.label}
//       to={item.link}
//       className={classes.link}
//       onClick={() => {
//         setActive(item.link);
//         toggle(); // close dropdown on mobile
//       }}
//       data-active={active === item.link || undefined}
//     >
//       <item.icon className={classes.icon} />
//       {item.label}
//     </NavLink>
//   ));

//   return (
//     <header className={classes.header}>
//       <div className={classes.logo}>
//         <AppLogo />
//       </div>

//       {/* Desktop Nav */}
//       <Group className={classes.navItems}>{items}</Group>

//       {/* Burger menu */}
//       <Burger
//         opened={opened}
//         onClick={toggle}
//         size="sm"
//         className={classes.burger}
//       />

//       {/* Mobile Nav Dropdown */}
//       {opened && <div className={classes.mobileMenu}>{items}</div>}
//     </header>
//   );
// }

import React, { useState } from "react";
import { Group, Burger, Menu, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconPlus,
  IconSettings,
  IconUser,
  IconLogout,
} from "@tabler/icons-react";

import classes from "./NavbarMantine.module.css";
import { AppLogo } from "../AppLogo";

const navItems = [
  { id: 1, label: "Home", link: "/home", icon: IconHome2 },
  { id: 2, label: "Add Recipes", link: "/recipes-add", icon: IconPlus },
  {
    id: 3,
    label: "Show Recipes",
    link: "/fetch",
    icon: IconDeviceDesktopAnalytics,
  },
];

export function NavbarMantine() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(navItems[0].link);

  const items = navItems.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={classes.link}
      onClick={() => {
        setActive(item.link);
        toggle();
      }}
      data-active={active === item.link || undefined}
    >
      <item.icon className={classes.icon} />
      {item.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <AppLogo />
      </div>

      {/* Desktop Navigation */}
      <Group className={classes.navItems}>
        {items}

        {/* SETTINGS DROPDOWN */}
        <Menu shadow="md" width={180} position="bottom-end">
          <Menu.Target>
            <div className={classes.settingsBtn}>
              <IconSettings className={classes.icon} />
              <Text className={classes.settingsText}>Settings</Text>
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconUser size={16} />}
              component={NavLink}
              to="/profile"
            >
              Profile
            </Menu.Item>

            <Menu.Item
              leftSection={<IconLogout size={16} />}
              component={NavLink}
              to="/log-out"
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>

      {/* Burger Menu */}
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        className={classes.burger}
      />

      {/* Mobile Menu */}
      {opened && (
        <div className={classes.mobileMenu}>
          {items}

          <Menu shadow="md" width={180}>
            <Menu.Target>
              <div className={classes.mobileSettingsBtn}>
                <IconSettings className={classes.icon} />
                Settings
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconUser size={16} />}
                component={NavLink}
                to="/profile"
              >
                Profile
              </Menu.Item>

              <Menu.Item
                leftSection={<IconLogout size={16} />}
                component={NavLink}
                to="/log-out"
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      )}
    </header>
  );
}
