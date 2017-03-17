// We only need to import the modules necessary for initial render
import Home from '../components/Home'
import Layout from '../components/Layout'

export const createRoutes = (store) => ({
	path: '/',
	component: Layout,
	indexRoute: Home([
    {link: 'testDemo', name: 'testDemo'}
  ]),
	childRoutes: [
    { path: 'testDemo', getComponent: (location, callback) => require.ensure([], require => callback(null, require('./testDemo').default(store)))},
    require('./redirect').default()
  ]
})

export default createRoutes
