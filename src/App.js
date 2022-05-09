import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './context/Context'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Card from './components/Card'
import './App.css'
function App() {
	return (
		<ContextProvider>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<div className="app">
								<div className="container">
									<Header />
									<main className="main">
										<Tabs />
										<Card />
									</main>
								</div>
							</div>
						}
					/>
				</Routes>
			</Router>
		</ContextProvider>
	)
}

export default App
