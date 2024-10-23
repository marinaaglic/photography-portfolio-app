"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div>
      <Switch
        checked={isDark}
        size="lg"
        color="success"
        onChange={handleThemeChange}
      />
    </div>
  );
};

export default ThemeSwitcher;
