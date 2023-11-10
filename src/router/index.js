import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../view/language.vue"),
  },
  {
    path: "/text",
    name: "text",
    component: () => import("../view/text.vue"),
  },
  {
    path: "/trade",
    name: "trade",
    component: () => import("../view/trade.vue"),
  },
  {
    path: "/removeuser",
    name: "removeuser",
    component: () => import("../view/removeuser.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../view/home.vue"),
  },
  {
    path: "/trade",
    name: "trade",
    component: () => import("../view/trade.vue"),
  },
  {
    path: "/earn",
    name: "earn",
    component: () => import("../view/earn.vue"),
  },
  {
    path: "/attack",
    name: "attack",
    component: () => import("../view/attack.vue"),
  },
  {
    path: "/language",
    name: "language",
    component: () => import("../view/language.vue"),
  },
  {
    path: "/Changeemail",
    name: "Changeemail",
    component: () => import("../view/Changeemail.vue"),
  },
  {
    path: "/Changepassword",
    name: "Changepassword",
    component: () => import("../view/Changepassword.vue"),
  },
  {
    path: "/Changeuser",
    name: "Changeuser",
    component: () => import("../view/Changeuser.vue"),
  },
  {
    path: "/connect",
    name: "connect",
    component: () => import("../view/connect.vue"),
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import("../view/forget.vue"),
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("../view/policy.vue"),
  },
  {
    path: "/removeuser",
    name: "removeuser",
    component: () => import("../view/removeuser.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../view/setting.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../view/terms.vue"),
  },
  {
    path: "/password",
    name: "password",
    component: () => import("../view/password.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../view/welcome.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../view/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../view/login.vue"),
  },
  {
    path: "/native",
    name: "native",
    component: () => import("../view/native.vue"),
  },
  {
    path: "/username",
    name: "username",
    component: () => import("../view/username.vue"),
  },
  {
    path: "/recommend",
    name: "recommend",
    component: () => import("../view/recommend.vue"),
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: () => import("../view/Portfolio.vue"),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("../view/wallet.vue"),
  },
  {
    path: "/connectwellet",
    name: "connectwellet",
    component: () => import("../view/connectwellet.vue"),
  },
  {
    path: "/wallets",
    name: "wallets",
    component: () => import("../view/wallets.vue"),
  },
  {
    path: "/walletpass",
    name: "walletpass",
    component: () => import("../view/walletpass.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return false; // 阻止默认的滚动行为
      }
    }
    return { top: 0 }; // 默认滚动到页面顶部
  },
});

export default router;
