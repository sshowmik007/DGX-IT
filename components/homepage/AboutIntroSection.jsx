import { CheckCircle } from "lucide-react";

export default function AboutIntroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col items-center justify-center space-y-4">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								About DGX-IT
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								At DGX-IT, we're not just another digital marketing agency.
								We're your strategic partner in navigating the complex digital
								landscape. Our mission is to empower businesses of all sizes
								with data-driven strategies that deliver measurable results and
								drive sustainable growth.
							</p>
						</div>
						<ul className="grid gap-3 pt-4">
							<li className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-primary" />
								<span className="font-medium">
									Data-Driven Approach: We let the numbers guide our strategies
								</span>
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-primary" />
								<span className="font-medium">
									Tailored Solutions: Custom strategies for your unique business
									needs
								</span>
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-primary" />
								<span className="font-medium">
									Transparent Reporting: Clear, concise, and actionable insights
								</span>
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="h-5 w-5 text-primary" />
								<span className="font-medium">
									Continuous Innovation: Always at the forefront of digital
									trends
								</span>
							</li>
						</ul>
					</div>
					<div className="flex items-center justify-center">
						<img
							alt="DGX-IT Team"
							className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
							height="600"
							src="/placeholder.svg"
							width="800"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
