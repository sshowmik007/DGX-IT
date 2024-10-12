import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex items-center justify-center">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Ready to Elevate Your Digital Presence?
						</h2>
						<p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
							Let's discuss how we can help you achieve your business goals
							through strategic digital marketing.
						</p>
					</div>
					<div className="space-x-4">
						<Button asChild size="lg" variant="secondary">
							<Link href="/consultation">
								Schedule a Free Consultation
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link href="/quote">Request a Custom Quote</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
