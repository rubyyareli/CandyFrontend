import{createRouter, createWebHistory} from 'vue-router'
const routes=[
    {
        path:'/', //inicio
        name:'home',
        component: ()=> import('../views/HomeView.vue')
    },
    {
        path:'/login', //ya
        name:'login',
        component: ()=> import('../views/LoginView.vue')
    },
    {
        path:'/register', //ya
        name:'register',
        component: ()=> import('../views/RegisterView.vue')
    },
    {
        path:'/marcadores', //ya
        name:'marcadores',
        component: ()=> import('../views/MarcadoresView.vue')
    },
    {
        path:'/blocs', //ya
        name:'blocs',
        component: ()=> import('../views/BlocsView.vue')
    },
    {
        path:'/plumas', //ya
        name:'plumas',
        component: ()=> import('../views/PlumasView.vue')
    },
    {
        path:'/libretas', //ya
        name:'libretas',
        component: ()=> import('../views/LibretasView.vue')
    },
    {
        path:'/marcatextos', //ya
        name:'marcatextos',
        component: ()=> import('../views/MarcaTextosView.vue')
    },
    {
        path:'/colores', //ya
        name:'colores',
        component: ()=> import('../views/ColoresView.vue')
    },
    {
        path:'/detalle/:id', //ya
        name:'detalle',
        component: ()=> import('../views/DetalleView.vue')
    },
    {
        path:'/dashboard', //ya
        name:'dashboard',
        component: ()=> import('../views/DashboardView.vue') 
    },
    {
        path:'/settings', //ya
        name:'settings',
        component: ()=> import('../views/SettingsView.vue') 
    },
    {
        path:'/productos', 
        name:'productos',
        component: ()=> import('../views/ProductosView.vue') 
    },
    {
        path:'/cart', //ya
        name:'',
        component: ()=> import('../views/CartView.vue') 
    },
    {
        path:'/search', //ya
        name:'search',
        component: ()=> import('../views/SearchView.vue')  
    },
    {
        path:'/pago',
        name:'pago',
        component: ()=> import('../views/PagoView.vue') 
    },
    {
        path:'/confirmacion',
        name:'confirmacion',
        component: ()=> import('../views/ConfirmacionView.vue') 
    },
    {
        path:'/datos',
        name:'datos',
        component: ()=> import('../views/DatosView.vue') 
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router