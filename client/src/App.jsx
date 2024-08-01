import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import NotFound from './components/not-found/NotFound'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'
import About from './components/about/About'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/catalog" element={<Catalog />}/>
				<Route path="/create" element={<Create />}/>
				<Route path="/about" element={<About />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</>
	)
}

export default App
