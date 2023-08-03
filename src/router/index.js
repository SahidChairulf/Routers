import { createWebHistory, createRouter } from "vue-router";
import Home from '/src/views/Home.vue';
import About from '/src/views/About.vue';
import Contact from '/src/views/Contact.vue';
import Produk from '/src/views/Produk.vue';
import Detail from '/src/views/Detail.vue';
import Kategori from "../views/Kategori.vue"
import DetailKategori from "../views/DetailKategori.vue"
import Login from "../views/Login.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
         path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
    //   const loggedInUser = localStorage.getItem('isLoggedIn');
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
    {
        path: '/detail/:id_produk',
        name: 'Detail',
        component: Detail,
        props: true
    },
    {
        path: '/kategori',
        name: 'Kategori',
        component: Kategori,
    },
    {
        path: '/detailkategori/:id_kategori',
        name: 'DetailKategori',
        component: DetailKategori,
        props: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;