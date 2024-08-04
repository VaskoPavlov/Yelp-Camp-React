import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import NotFound from './components/not-found/NotFound'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'
import About from './components/about/About'
import Details from './components/details/Details'
import Footer from './components/footer/Footer'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/camps" element={<Catalog />}/>
				<Route path="/create" element={<Create />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/camps/:campId" element={<Details />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
			<Footer />
		</>
	)
}

export default App
