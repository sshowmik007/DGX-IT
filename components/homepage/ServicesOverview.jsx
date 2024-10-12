import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Globe, Search, Share2, PenTool } from "lucide-react";

const services = [
	{
		icon: Globe,
		title: "Web Development",
		description: "Custom websites that convert visitors into customers.",
		link: "/services/web-development",
	},
	{
		icon: Search,
		title: "SEO",
		description: "Boost your visibility and climb the search engine rankings.",
		link: "/services/seo",
	},
	{
		icon: Share2,
		title: "Social Media Marketing",
		description:
			"Engage your audience and build brand loyalty across platforms.",
		link: "/services/social-media",
	},
	{
		icon: PenTool,
		title: "Content Marketing",
		description: "Compelling content that tells your story and drives results.",
		link: "/services/content-marketing",
	},
];

export default function ServicesOverview() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
			<div className="container px-4 md:px-6 ">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Our Services
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
					{services.map((service, index) => (
						<Card key={index}>
							<CardHeader>
								<service.icon className="w-10 h-10 mb-2 text-primary" />
								<CardTitle>{service.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{service.description}</CardDescription>
								<Button asChild className="mt-4" variant="outline">
									<Link href={service.link}>Learn More</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
