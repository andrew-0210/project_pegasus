"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const Footer = () => {
	useGSAP(() => {
		SplitText.create(".split", {
			type: "words, chars",
			onSplit(self) {
				// runs every time it splits
				gsap.from(self.words, {
					duration: 1,
					y: 100,
					autoAlpha: 0,
					stagger: 0.05,
				});
			},
		});
	}, {});
	return (
		<section className="">
			<div className="h-dvh bg-[#2a2a2a] flex justify-center items-center">
				<h3 className="text-[3rem] split">
					Call Us For a Free Quote, No-Obligation
				</h3>
				<button
					type=""
					className="split">
					(03) 9968 1816
				</button>
			</div>
		</section>
	);
};

export default Footer;
