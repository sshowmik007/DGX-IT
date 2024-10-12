"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutIntroSection() {
	return (
		<section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48  bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
			<div className="container px-4 md:px-6 relative flex flex-col items-center">
				<motion.div
					className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50"
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 0.5 }}
					transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
				/>
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<motion.div
						className="flex flex-col justify-center space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
								Innovate. Create. Elevate.
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
								At PixelPerfect Agency, we transcend traditional digital
								marketing. Our team of visionary creatives and strategic
								masterminds is dedicated to elevating your brand to
								unprecedented heights in the digital realm. We craft compelling
								narratives and design immersive experiences that not only
								resonate with your audience but drive tangible, measurable
								results.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="flex flex-col justify-center space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<ul className="grid gap-6 sm:grid-cols-2">
							{[
								"Data-Driven Strategies",
								"Award-Winning Designs",
								"24/7 Concierge Support",
								"Industry-Leading Expertise",
								"Cutting-Edge Technologies",
								"Proven ROI",
							].map((point, index) => (
								<motion.li
									key={index}
									className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm p-3 rounded-lg shadow-sm"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<CheckCircle className="h-5 w-5 text-primary" />
									<span className="text-sm font-medium">{point}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
