import type { Route } from "./+types/home";
import CalmPandaLanding from "../welcome/calm_panda_landing_react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <CalmPandaLanding />;
}
