import Vue from "vue";
import VueRouter from "vue-router";
import Trending from "../views/Trending";
import About from "../views/AboutUs";
import Clothes from "../views/Clothes";
import Contact from "../views/Contact";
import Details from "../views/ProductDetail";
import Questions from "../views/Questions";
import Error from "../views/Error404";
import MiCarrito from "@/views/MiCarrito";
import AddProduct from "../views/AddProduct";
import UpdateProduct from "../views/UpdateProduct";
import CreateUser from "../views/CreateUser";
import UpdateUser from "../views/UpdateUser";
import Status from "../views/OrderDetails";
import Confirmation from "../views/PurchaseConfirmation";
import Products from "../views/Products";
import MyAccount from "../views/MyAccount";
import { authGuard } from "../auth/authGuard";
import MyProducts from "../views/MyProducts";
import MyPurchases from "../views/MyPurchases";
import GetPhoenixCredits from "../views/GetPhoenixCredits"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Trending",
        component: Trending,
    },
    {
        path: "/nosotros",
        name: "Nosotros",
        component: About,
    },
    {
        path: "/ropa",
        name: "Ropa",
        component: Products,
    },
    {
        path: "/ropa/:category",
        name: "Ropa",
        component: Clothes,
    },
    {
        path: "/contacto",
        name: "Contacto",
        component: Contact,
    },
    {
        path: "/preguntas",
        name: "Preguntas",
        component: Questions,
    },
    {
        path: "/producto/:id",
        name: "Detalles",
        component: Details,
    },
    {
        path: "/carrito",
        name: "MiCarrito",
        component: MiCarrito,
        beforeEnter: authGuard,
    },
    {
        path: "/cuenta",
        name: "MiCuenta",
        component: MyAccount,
        beforeEnter: authGuard,
    },
    {
        path: "/cuenta/mis-productos",
        name: "MisProductos",
        component: MyProducts,
        beforeEnter: authGuard,
    },
    {
        path: "/cuenta/mis-compras",
        name: "MisProductos",
        component: MyPurchases,
        beforeEnter: authGuard,
    },
    {
        path: "/user/agregar-producto",
        name: "Agregar-productos",
        component: AddProduct,
    },
    {
        path: "/user/actualizar-producto",
        name: "Actualizar-producto",
        component: UpdateProduct,
    },
    {
        path: "/crear-ususario",
        name: "Crear usuario",
        component: CreateUser,
    },
    {
        path: "/producto/estado",
        name: "estado de orden",
        component: Status,
    },
    {
        path: "/user/actualizar-usuario",
        name: "Actualizar usuario",
        component: UpdateUser,
    },
    {
        path: "/confirmacion",
        name: "confirmation",
        component: Confirmation,
    },
    {
        path: "/credits",
        name: "credits",
        component: GetPhoenixCredits
    },
    {
        path: "/*",
        name: "Error",
        component: Error,
    },
];

const router = new VueRouter({
    index: "/default.html",
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;