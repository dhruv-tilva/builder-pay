import Benefits from "../pages/benefits";
import Home from "../pages/home";
import Layout from "../pages/layout";

export const routes = [
  {
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/benefits",
        component: Benefits,
      },
    ],
  },
];
