import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/default/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "movie",
        name: "Movie",
        component: () => import("@/pages/movie/index.vue"),
      },
      {
        path: "tv",
        name: "TV",
        component: () => import("@/pages/tv/index.vue"),
      },
      {
        path: "search",
        name: "Search",
        component: () => import("@/pages/search/index.vue"),
      },
    ],
  },
];

export default routes;
