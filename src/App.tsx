import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createHashHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import routes from './routes/AppRoutes'
import HomePage from './pages/Home/HomePage'

const history = createHashHistory()
const queryClient = new QueryClient()

function App () {
  return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Router history={history}>
					<Switch>
						{routes.map(route => (
							<Route
								key={route.path}
								exact
								path={route.path}
								component={route.component}
							/>
						))}

						<Route key='' exact path='' component={HomePage} />
					</Switch>
				</Router>
			</QueryClientProvider>
		</div>
  )
}

export default App
