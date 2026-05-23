import React from 'react';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaPinterest,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaShippingFast,
	FaLock,
	FaQuestionCircle,
	FaTruck,
	FaCreditCard,
} from 'react-icons/fa';
import { Container } from '../container.common';

export const Footer: React.FC = () => {
	return (
		<footer className="bg-black/90 text-white py-12">
			<Container>
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="lg:col-span-2">
							<h3 className="text-xl font-bold mb-4">ShopEase</h3>
							<p className="text-gray-400 mb-4">
								Your one-stop destination for all shopping needs. Quality products at affordable prices
								with fast delivery.
							</p>
							<div className="flex space-x-4 mb-6">
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<FaFacebook size={20} />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<FaTwitter size={20} />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<FaInstagram size={20} />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<FaLinkedin size={20} />
								</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									<FaPinterest size={20} />
								</a>
							</div>
							<div className="flex items-center text-gray-400 text-sm">
								<FaShippingFast className="mr-2" />
								<span>Free shipping on orders over $50</span>
							</div>
						</div>

						{/* Customer Service */}
						<div>
							<h4 className="text-lg font-semibold mb-4">Customer Service</h4>
							<ul className="space-y-2">
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition-colors">
										Help Center
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition-colors">
										How to Buy
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition-colors">
										Returns & Exchanges
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition-colors">
										Shipping Info
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition-colors">
										Contact Us
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition-colors">
										FAQs
									</a>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
							<ul className="space-y-3">
								<li className="flex items-start">
									<FaMapMarkerAlt className="text-gray-400 mt-1 mr-3" />
									<span className="text-gray-400">
										123 Commerce St, Suite 100
										<br />
										New York, NY 10001
									</span>
								</li>
								<li className="flex items-center">
									<FaPhone className="text-gray-400 mr-3" />
									<span className="text-gray-400">+1 (800) 123-4567</span>
								</li>
								<li className="flex items-center">
									<FaEnvelope className="text-gray-400 mr-3" />
									<span className="text-gray-400">support@shopease.com</span>
								</li>
								<li className="flex items-center mt-4">
									<FaLock className="text-gray-400 mr-3" />
									<span className="text-gray-400">Secure Shopping</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<p className="text-gray-500 text-sm">
								&copy; {new Date().getFullYear()} ShopEase. All rights reserved.
							</p>
						</div>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
								<FaCreditCard className="inline mr-1" /> Payment Methods
							</a>
							<a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
								<FaTruck className="inline mr-1" /> Track Order
							</a>
							<a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
								<FaQuestionCircle className="inline mr-1" /> Terms & Conditions
							</a>
						</div>
					</div>
				</>
			</Container>
		</footer>
	);
};
