import React from "react";

import HeroSection from "@/components/homepage/HeroSection";
import AboutIntroSection from "@/components/homepage/AboutIntroSection";
import ServicesOverview from "@/components/homepage/ServicesOverview";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import ClientTestimonials from "@/components/homepage/ClientTestimonials";
import PortfolioPreview from "@/components/homepage/PortfolioPreview";
import ProcessWorkflow from "@/components/homepage/ProcessWorkflow";
import CTASection from "@/components/homepage/CTASection";

const HomePage = () => {
	return (
		<div>
			<main>
				<HeroSection />
				<AboutIntroSection />
				<ServicesOverview />
				<WhyChooseUs />
				<ClientTestimonials />
				<PortfolioPreview />
				<ProcessWorkflow />
				<CTASection />
			</main>
		</div>
	);
};

export default HomePage;
