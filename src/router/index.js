import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
    component: () =>
      import(/* webpackChunkName: "workers" */ "../views/WorkersView.vue"),
  },
  {
    path: "/workers/workers-edit:id?",
    name: "workers-edit",
    component: () =>
      import(/* webpackChunkName: "workers" */ "../views/WorkersEditor.vue"),
  },
  {
    path: "/candidates",
    name: "candidates",
    component: () =>
      import(
        /* webpackChunkName: "candidates" */ "../views/CandidatesView.vue"
      ),
  },
  {
    path: "/candidates/candidates-edit:id?",
    name: "candidates-edit",
    component: () =>
      import(/* webpackChunkName: "workers" */ "../views/CandidatesEditor.vue"),
  },
  {
    path: "/interviews",
    name: "interviews",
    component: () =>
      import(
        /* webpackChunkName: "candidates" */ "../views/InterviewsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
