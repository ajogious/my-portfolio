"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export function ThemeTest() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Theme Test</h2>
      <p>Current theme: {theme}</p>
      <div className="space-x-2">
        <Button onClick={() => setTheme("light")}>Light</Button>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
        <Button onClick={() => setTheme("system")}>System</Button>
      </div>
      <div className="p-4 bg-background border rounded-lg">
        This is a background test
      </div>
    </div>
  );
}
