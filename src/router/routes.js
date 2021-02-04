import Home from '../views/Home.vue'
import Goods from '../views/Goods.vue'
import Order from '../views/Order.vue'
import Mine from '../views/Mine.vue'

export default [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/goods',
        name: 'goods',
        component: Goods
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
]