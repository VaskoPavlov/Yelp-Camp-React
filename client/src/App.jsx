import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

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
import { AuthContextProvider } from './contexts/AuthContext' 
import Profile from './components/profile/Profile'
import AuthGuard from './components/auth-guard/AuthGuard'
import Logout from './components/logout/Logout'
import Edit from './components/edit/Edit'

function App() {
	return (
		<>
			<AuthContextProvider>
				<Header />
					<Routes>
						<Route path="/" element={<Home />}/>
						<Route path="/login" element={<Login />}/>
						<Route path="/logout" element={<Logout />}/>
						<Route path="/register" element={<Register />}/>
						<Route path="/camps" element={<Catalog />}/>
						<Route 
							path="/create" 
							element={ 
							<AuthGuard>
								<Create />
							</AuthGuard>}/>
						<Route path="/about" element={<About />}/>
						<Route path="/camps/:campId" element={<Details />}/>
						<Route path="/camps/:campId/edit" element={<Edit />}/>
						<Route 
							path="/profile" 
							element={
							<AuthGuard>
								<Profile />
							</AuthGuard>}/>
						<Route path="*" element={<NotFound />}/>
					</Routes>
				<Footer />
			</AuthContextProvider>
		</>
	)
}

export default App
