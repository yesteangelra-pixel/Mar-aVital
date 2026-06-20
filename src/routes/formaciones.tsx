import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/formaciones")({
  beforeLoad: () => {
    throw redirect({ to: "/aromaterapia", replace: true });
  },
  component: () => null,
});
