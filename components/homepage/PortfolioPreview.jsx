import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const portfolioItems = [
	{
		title: "E-commerce Redesign",
		description:
			"Increased conversions by 75% through UX improvements and SEO optimization.",
		image: "/placeholder.svg",
		link: "/portfolio/ecommerce-redesign",
	},
	{
		title: "B2B Lead Generation Campaign",
		description:
			"Generated 500+ qualified leads in 3 months through targeted content marketing.",
		image: "/placeholder.svg",
		link: "/portfolio/b2b-lead-generation",
	},
	{
		title: "Local Business SEO Boost",
		description:
			"Achieved #1 ranking for key local search terms, increasing foot traffic by 40%.",
		image: "/placeholder.svg",
		link: "/portfolio/local-seo-boost",
	},
];

export default function PortfolioPreview() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Our Work
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{portfolioItems.map((item, index) => (
						<Card key={index}>
							<CardHeader>
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-48 object-cover rounded-t-lg"
								/>
							</CardHeader>
							<CardContent>
								<CardTitle className="mb-2">{item.title}</CardTitle>
								<p className="text-muted-foreground">{item.description}</p>
							</CardContent>
							<CardFooter>
								<Button asChild variant="outline">
									<Link href={item.link}>View Case Study</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
				<div className="text-center mt-12">
					<Button asChild size="lg">
						<Link href="/portfolio">View Full Portfolio</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
