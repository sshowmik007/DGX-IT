import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-background border-t flex items-center justify-center">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">DGX-IT</h3>
						<p className="text-sm text-muted-foreground">
							Elevating digital presence through data-driven strategies.
						</p>
					</div>
					<div>
						<h4 className="text-sm font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link href="/services" className="text-sm hover:underline">
									Services
								</Link>
							</li>
							<li>
								<Link href="/about" className="text-sm hover:underline">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/portfolio" className="text-sm hover:underline">
									Portfolio
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-sm hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<Link href="/privacy" className="text-sm hover:underline">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="/terms" className="text-sm hover:underline">
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold mb-4">Connect</h4>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<Facebook className="h-5 w-5" />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<Instagram className="h-5 w-5" />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
					© 2024 DGX-IT. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
