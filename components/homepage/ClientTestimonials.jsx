import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Sarah Johnson",
		company: "TechStart Inc.",
		quote:
			"DigiMarkPro transformed our online presence. Our leads have increased by 150% since working with them!",
		rating: 5,
	},
	{
		name: "Michael Chen",
		company: "GreenEats Co.",
		quote:
			"Their SEO expertise helped us reach the top of search results. Highly recommended!",
		rating: 5,
	},
	{
		name: "Emily Rodriguez",
		company: "FitLife Gym",
		quote:
			"The social media campaign they created for us was a game-changer. Our engagement rates skyrocketed!",
		rating: 4,
	},
];

export default function ClientTestimonials() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					What Our Clients Say
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<Card key={index}>
							<CardHeader>
								<CardTitle>{testimonial.name}</CardTitle>
								<p className="text-sm text-muted-foreground">
									{testimonial.company}
								</p>
							</CardHeader>
							<CardContent>
								<p className="mb-4">"{testimonial.quote}"</p>
								<div className="flex">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 fill-primary text-primary"
										/>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
