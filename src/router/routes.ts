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
        path: "movie/:slug",
        name: "MovieDetail",
        component: () => import("@/pages/movie/index.vue"),
      },
      {
        path: "movie/:slug/watch",
        name: "MovieWatch",
        component: () => import("@/pages/movie/watch.vue"),
        props: true,
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
