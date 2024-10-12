import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import GradualSpacing from "../ui/gradual-spacing";
import ShineBorder from "../ui/shine-border";

export default function HeroSection() {
	return (
		<section className="w-full py-0  bg-background">
			<ShineBorder
				className=" flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
				color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
			>
				<div className=" px-4 md:px-6">
					<div className="flex flex-col items-center flex-center space-y-4 text-center">
						<div className="space-y-2">
							<GradualSpacing
								className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
								text="Elevate Your Digital Presence"
							/>

							<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								We craft data-driven strategies that turn clicks into customers
								and boost your bottom line.
							</p>
						</div>
						<div className="space-x-4">
							<Button asChild size="lg">
								<Link href="/consultation">
									Get a Free Consultation
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</ShineBorder>
		</section>
	);
}
