import VueRouter from 'vue-router'
import routes from './routes'

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new VueRouter({
  mode: 'history',
  routes
})

