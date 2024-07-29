'use client'

import { useState } from 'react'
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	MapPinIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import YelpCamp from '../../public/images/YelpCampLogo.png'

const seasons = [
	{ name: 'Spring', description: 'Moderate temperatures and the beauty of nature', href: '/catalog/spring', icon: MapPinIcon },
	{ name: 'Summer', description: 'Seaside campgrounds with natural shade', href: '/catalog/summer', icon: MapPinIcon },
	{ name: 'Fall', description: 'Mountains with trees of various leaf colors', href: '/catalog/fall', icon: MapPinIcon },
]

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="bg-white">
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link className="-m-1.5 p-1.5" to="/">
						<span className="sr-only">Yelp Camp</span>
						<img alt="Yelp Camp" src={YelpCamp} className="h-8 w-auto lg:h-16 w-auto md:h-12 w-auto" />
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
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<Popover className="relative">
						<PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
							Seasons
							<ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
						</PopoverButton>

						<PopoverPanel
							transition
							className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="p-4">
								{seasons.map((item) => (
									<div
										key={item.name}
										className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
									>
										<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
										</div>
										<div className="flex-auto">
											<Link to={item.href} className="block font-semibold text-gray-900">
												{item.name}
												<span className="absolute inset-0" />
											</Link>
											<p className="mt-1 text-gray-600">{item.description}</p>
										</div>
									</div>
								))}
							</div>
							<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
								{/* {callsToAction.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
									>
										<item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
										{item.name}
									</Link>
								))} */}
							</div>
						</PopoverPanel>
					</Popover>

					<Link className="text-sm font-semibold leading-6 text-gray-900" to="/catalog">
						Catalog
					</Link>
					<Link className="text-sm font-semibold leading-6 text-gray-900" to="/create">
						Create
					</Link>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{/* User */}
					<Link className="m-3 text-sm font-semibold leading-6 text-gray-900" to="/logout">
						Logout
					</Link>
					{/* Guest */}
					<Link className="m-3 text-sm font-semibold leading-6 text-gray-900" to="/login">
						Login
					</Link>
					<Link className="m-3 text-sm font-semibold leading-6 text-gray-900" to="/register">
						Register
					</Link>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link to="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Yelp Camp</span>
								<img
									alt=""
									src={YelpCamp}
									className="h-8 w-auto"
								/>
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
								<div className="space-y-2 py-6">
									<Disclosure as="div" className="-mx-3">
										<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											Seasons
											<ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
										</DisclosureButton>
										<DisclosurePanel className="mt-2 space-y-2">
											{[...seasons].map((item) => (
												<DisclosureButton
													key={item.name}
													as="Link"
													to={item.href}
													className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</DisclosureButton>
											))}
										</DisclosurePanel>
									</Disclosure>
									<Link
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/create"
									>
										Create
									</Link>
									<Link
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/catalog"
									>
										Catalog
									</Link>
								</div>
								<div className="py-6">
									{/* for user */}
									<Link
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/logout"
									>
										Logout
									</Link>
									{/* for guest */}
									<Link
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/login"
									>
										Login
									</Link>
									<Link
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										to="/register"
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