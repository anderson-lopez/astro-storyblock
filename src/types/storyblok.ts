import type { SbBlokData } from "@storyblok/astro";

export interface UserRowBlok extends SbBlokData {
  component: "user_row";
  name: string;
  email: string;
  role: string;
  status: "Activo" | "Inactivo";
}

export interface UserTableBlok extends SbBlokData {
  component: "user_table";
  title: string;
  rows: UserRowBlok[];
}

export interface StatsCardBlok extends SbBlokData {
  component: "stats_card";
  title: string;
  value: string;
  color: string;
}

export interface PageBlok extends SbBlokData {
  component: "page";
  body: SbBlokData[];
}

export interface SettingsCardBlok extends SbBlokData {
  component: "settings_card";
  label: string;
  value: string;
  helperText?: string;
}
