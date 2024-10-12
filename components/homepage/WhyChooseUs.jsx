import { CheckCircle, Users, TrendingUp, HeadphonesIcon } from "lucide-react";

const reasons = [
	{
		icon: CheckCircle,
		title: "Personalized Strategies",
		description:
			"Tailored solutions designed to meet your unique business goals.",
	},
	{
		icon: Users,
		title: "Expert Team",
		description: "Seasoned professionals with diverse industry experience.",
	},
	{
		icon: TrendingUp,
		title: "Data-Driven Approach",
		description: "Decisions backed by analytics for measurable results.",
	},
	{
		icon: HeadphonesIcon,
		title: "Exceptional Support",
		description: "Dedicated customer service to ensure your success.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Why Choose Us
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{reasons.map((reason, index) => (
						<div key={index} className="flex flex-col items-center text-center">
							<reason.icon className="w-12 h-12 mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2">{reason.title}</h3>
							<p className="text-muted-foreground">{reason.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
