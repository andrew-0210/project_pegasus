"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Footer = () => {
	const footerContainer = useRef();
	const container = useRef();
	useGSAP(
		() => {
			SplitText.create(".split", {
				type: "words, chars",
				onSplit(self) {
					// runs every time it splits
					gsap.to(self.words, {
						duration: 1,
						// autoAlpha: 0,

						stagger: 0.05,
					});
					gsap.to(footerContainer.current, {
						duration: 2,
						x: "-250%",
						scrollTrigger: {
							trigger: ".footerContainer",
							start: "top 5%",
							end: "top -500%",
							scrub: 3,
							pin: true,
						},
					});
				},
			});
		},
		{ scope: container },
	);
	return (
		<section
			className="overflow-x-hidden px-12"
			ref={container}>
			<div
				className="h-full flex flex-col gap-5 justify-start items-start footerContainer"
				ref={footerContainer}>
				<h3 className="text-[20vw] split overflow-y-hidden uppercase whitespace-nowrap textContainer font-serif">
					Call Us For a Free Quote, No-Obligation.
				</h3>
			</div>
		</section>
	);
};

export default Footer;
