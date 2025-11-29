import type { Project } from "../types/sections";

export const projects: Project[] = [
  {
    title: "Green Wheel (EV Rental Platform)",
    role: "Frontend Developer",
    description:
      "A web app for electric vehicle rental enabling users to search EV availability, manage bookings, and process payments.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HeroUI",
      "React Query",
      "Axios",
      "Zustand",
      "Formik/Yup",
      "i18n",
      "NextStep.js",
    ],
    teamSize: "5",
    githubUrl: "https://github.com/hycat-team/green-wheel-fe",
    images: [
      "img/1.png",
      "img/3.png",
      "img/4.png",
      "img/1.png",
      "img/3.png",
      "img/4.png",
    ],
    codeSnippet:
      "const { data: vehicles } = useQuery(['vehicles'], fetchVehicles);\n\nreturn <VehicleGrid items={vehicles} />;",
  },
  {
    title: "Ecom Orchid (Mini Project)",
    role: "Frontend Developer",
    description:
      "A modern e-commerce web app for browsing orchids, managing carts, and placing orders with a responsive UI.",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "HeroUI",
      "Vite",
      "Zustand (persist)",
      "React Query",
      "Formik/Yup",
      "Axios",
      "JSON-Server / MockAPI",
    ],
    githubUrl: "https://github.com/devgiahuy/ecom-orchid",
    images: [
      "/projects/ecom-orchid-1.png",
      "/projects/ecom-orchid-2.png",
      "/projects/ecom-orchid-3.png",
    ],
    codeSnippet:
      "const useCartStore = create<CartState>()(\n  persist((set) => ({ items: [], addItem: (p) => set(...)}), { name: 'cart' })\n);",
  },
];
