import React from 'react';

const Footer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">About</h5>
				<p>How Airbnb Works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>Its a pretty Nice Airbnb</p>
				<p>Referrals</p>
				<p>PapaReact</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">HOST</h5>
				<p>Vercel</p>
				<p>Next.js</p>
				<p>Airbnb Clone</p>
				<p>Front End</p>
				<p>Join me</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help center</p>
				<p>Trust & Safety</p>
				<p>Say Hi Youtube</p>
				<p>Support Staff</p>
				<p>For The Customer</p>
			</div>
		</div>
	);
};

export default Footer;
