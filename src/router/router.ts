import { createRouter, createWebHistory } from "vue-router"
import { defineAsyncComponent } from "vue"
import Skeleton from "@/views/Skeleton.vue";
const routes = [
  {
    path: '/',
    name: "home",
    component: defineAsyncComponent({
      loader: () => import("@/views/Home.vue"),
      loadingComponent: Skeleton
    }),
    meta: {
      layout: defineAsyncComponent({
        loader: () => import("@/components/layout/MainLayout.vue"),
        loadingComponent: Skeleton
      }),
    }
  },
  {
    path: '/profile',
    name: "profile",
    component: defineAsyncComponent(() => import("@/views/ProfileView.vue")),
    meta: {
      layout: defineAsyncComponent(() => import("@/components/layout/MainLayout.vue")),
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
