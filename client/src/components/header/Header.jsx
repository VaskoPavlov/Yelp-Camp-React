'use client'

import { useContext, useState } from 'react'
import {
	Dialog,
	DialogPanel,
	Disclosure,
	Popover,
	PopoverGroup,
} from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import YelpCamp from '../../public/images/YelpCampLogo.png'
import styles from './header-button.module.css';
import { AuthContext } from '../../contexts/AuthContext'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const {isAuthenticated, email} = useContext(AuthContext);

	return (
		<header className="bg-white fixed top-0 w-full z-10">
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
				<div className="flex lg:flex-1">
					<Link to="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Yelp Camp</span>
						<img alt="Yelp Camp" src={YelpCamp} className="h-8 w-auto lg:h-16 md:h-12" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">MENU</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-1">
					<div>
						<Link to="/about" className="px-3 text-lg font-bold leading-6">
							<span className={styles.textImage}>About</span>
						</Link>
						<Link to="/camps" className="px-3 text-lg font-bold leading-6">
							<span className={styles.textImage}>Catalog</span>
						</Link>
					</div>
					{isAuthenticated
						? ( 
							<div>
								<Link to="/create" className="px-3 py-1 text-lg font-bold leading-6">
									<span className={styles.textImage}>Create</span>
								</Link>
								<Link to="/logout" className="px-3 py-1 text-lg font-bold leading-6 text-gray-900">
									Logout
								</Link>
								<Link to="/profile" className="px-3 py-1 text-lg underline decoration-wavy font-bold leading-6 text-gray-900">
									{email}
								</Link>
							</div> 
						)
						: ( 
							<div>
								<Link to="/login" className="px-3 py-1 text-lg font-bold leading-6 text-gray-900">
									Login
								</Link>
								<Link to="/register" className="px-3 py-1 text-lg font-bold leading-6 text-gray-900">
									Register
								</Link>
							</div> 
						)}
				</PopoverGroup>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Yelp Camp</span>
							<img alt="Yelp Camp" src={YelpCamp} className="h-8 w-auto lg:h-16 md:h-12" />
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6 menu">
								<Disclosure as="div" className="-mx-3">
								</Disclosure>
								<Link
									to="/camps"
									className="-mx-3 text-lg block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
								>
									<span className={styles.textImage}>Catalog</span>
								</Link>
								<Link
									to="/create"
									className="-mx-3 text-lg block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
								>
									<span className={styles.textImage}>Create</span>
								</Link>
							</div>
							<div className="py-6">
								<Link
									to="/logout"
									className="-mx-3 text-lg block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Logout
								</Link>
								<Link
									to="/login"
									className="-mx-3 text-lg block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Login
								</Link>
								<Link
									to="/register"
									className="-mx-3 text-lg block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Register
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}