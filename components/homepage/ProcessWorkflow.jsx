import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ClipboardList,
	Users,
	BarChart,
	Rocket,
	CheckCircle,
	ArrowRight,
} from "lucide-react";

const workflowSteps = [
	{
		icon: ClipboardList,
		title: "Discovery",
		description:
			"We start by understanding your business, goals, and target audience through in-depth consultations.",
	},
	{
		icon: Users,
		title: "Strategy Development",
		description:
			"Our team crafts a tailored digital marketing strategy aligned with your objectives and industry best practices.",
	},
	{
		icon: BarChart,
		title: "Implementation",
		description:
			"We execute the strategy across chosen channels, continuously monitoring and optimizing for best results.",
	},
	{
		icon: Rocket,
		title: "Growth & Scaling",
		description:
			"As we see success, we scale up successful tactics and explore new opportunities for growth.",
	},
	{
		icon: CheckCircle,
		title: "Review & Refine",
		description:
			"Regular check-ins and comprehensive reports keep you informed, and we refine our approach based on data and feedback.",
	},
];

export default function ProcessWorkflow() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Our Process
				</h2>
				<div className="grid gap-6 lg:grid-cols-5">
					{workflowSteps.map((step, index) => (
						<Card key={index} className="relative">
							{index < workflowSteps.length - 1 && (
								<div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full z-10 hidden lg:block items-center text-center ">
									<ArrowRight className="w-4 absolute left-1  text-white" />
								</div>
							)}
							<CardHeader>
								<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
									<step.icon className="w-6 h-6 text-primary-foreground" />
								</div>
								<CardTitle>{step.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									{step.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
