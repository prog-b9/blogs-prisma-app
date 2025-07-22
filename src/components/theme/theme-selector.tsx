"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useThemeConfig } from "./active-theme";
import { Button } from "../ui/button";

const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "gray",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Amber",
    value: "amber",
  },
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Teal",
    value: "teal",
  },
];

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const selectColor: any = DEFAULT_THEMES.find(
    (item) => item.value === activeTheme
  )?.value;

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id="theme-selector"
          className="justify-start *:data-[slot=select-value]:w-10"
        >
          <span className="text-muted-foreground hidden sm:flex items-center gap-2">
            Select a theme:{" "}
            {selectColor ? (
              <div
                aria-label={selectColor}
                className={`size-3 rounded-full p-0 `}
                style={{
                  background: `var(--color-${selectColor}-600)`,
                  outline: `2px var(--color-${selectColor}-600) solid`,
                  outlineOffset: activeTheme === selectColor ? 2 : 0,
                }}
              ></div>
            ) : null}
          </span>
          <span className="text-muted-foreground block sm:hidden">Theme</span>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectGroup className="w-[200px]">
            <SelectLabel>Colors</SelectLabel>
            <div className="flex gap-2 items-center flex-wrap p-2">
              {DEFAULT_THEMES.map((theme) => (
                <Button
                  key={theme.value}
                  type="button"
                  aria-label={theme.name}
                  onClick={() => setActiveTheme(theme.value)}
                  className={`size-6 rounded-full p-0 `}
                  style={{
                    background: `var(--color-${theme.value}-600)`,
                    outline: `2px var(--color-${theme.value}-600) solid`,
                    outlineOffset: activeTheme === theme.value ? 2 : 0,
                  }}
                />
              ))}
            </div>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
