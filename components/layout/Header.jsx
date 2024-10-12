import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
	return (
		<header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-2xl font-bold">DGX-IT</span>
				</Link>
				<nav className="hidden md:flex space-x-4 lg:space-x-6">
					<Link
						href="/services"
						className="text-sm font-medium hover:underline"
					>
						Services
					</Link>
					<Link href="/about" className="text-sm font-medium hover:underline">
						About
					</Link>
					<Link
						href="/portfolio"
						className="text-sm font-medium hover:underline"
					>
						Portfolio
					</Link>
					<Link href="/contact" className="text-sm font-medium hover:underline">
						Contact
					</Link>
				</nav>
				<div className="flex items-center space-x-4">
					<Button asChild variant="ghost" className="hidden sm:inline-flex">
						<Link href="/login">Log In</Link>
					</Button>
					<Button asChild className="hidden sm:inline-flex">
						<Link href="/consultation">Get Started</Link>
					</Button>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
