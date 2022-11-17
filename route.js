import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "main",
    component: () => import("./components/main")
   },
  {
    path: "/memberlist",
    alias: "/memberlist",
    name: "memberlist",
    component: () => import("./components/Memberlist")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("./components/Signup")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/login")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
