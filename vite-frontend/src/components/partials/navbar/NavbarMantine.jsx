import React, { useState } from "react";
import { Group, Burger, Menu, Text, Drawer, Stack, UnstyledButton, Divider } from "@mantine/core";
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
  // { id: 3, label: "Show Recipes", link: "/fetch", icon: IconDeviceDesktopAnalytics },
];

export function NavbarMantine() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(navItems[0].link);

  const desktopNavLinks = navItems.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={classes.link}
      onClick={() => setActive(item.link)}
      data-active={active === item.link || undefined}
    >
      <item.icon className={classes.icon} />
      <span>{item.label}</span>
    </NavLink>
  ));

  const mobileNavLinks = navItems.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={classes.mobileLink}
      onClick={() => {
        setActive(item.link);
        close();
      }}
      data-active={active === item.link || undefined}
    >
      <item.icon className={classes.icon} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <AppLogo />
      </div>

      {/* Desktop Navigation */}
      <Group gap={8} visibleFrom="sm">
        {desktopNavLinks}

        {/* Desktop Settings Dropdown */}
        <Menu shadow="md" width={180} position="bottom-end">
          <Menu.Target>
            <UnstyledButton className={classes.link}>
              <IconSettings className={classes.icon} />
              <Text component="span" size="sm" fw={500}>
                Settings
              </Text>
            </UnstyledButton>
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

      {/* Mobile Burger Trigger */}
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        hiddenFrom="sm"
        aria-label="Toggle navigation"
      />

      {/* Mobile Drawer Navigation */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={<AppLogo />}
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="sm" mt="md">
          {mobileNavLinks}

          <Divider my="sm" label="Account" labelPosition="center" />

          <NavLink to="/profile" className={classes.mobileLink} onClick={close}>
            <IconUser className={classes.icon} />
            <span>Profile</span>
          </NavLink>

          <NavLink to="/log-out" className={classes.mobileLink} onClick={close}>
            <IconLogout className={classes.icon} />
            <span>Logout</span>
          </NavLink>
        </Stack>
      </Drawer>
    </header>
  );
}