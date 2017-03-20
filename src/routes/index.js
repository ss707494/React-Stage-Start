// We only need to import the modules necessary for initial render
import Home from '../components/Home'
import Layout from '../components/Layout'

export const createRoutes = (store) => ({
	path: '/',
	component: Layout,
	indexRoute: Home([
    {link: 'todo', name: 'todo'}
  ]),
	childRoutes: [
    { path: 'todo', getComponent: (location, callback) => require.ensure([], require => callback(null, require('./todo').default(store)))},
    require('./redirect').default()
  ]
})

export default createRoutes
