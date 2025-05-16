"use client";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
	const [data, setData] = useState("");
	const [isLoading, setIsLoading] = useState(false);

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const res = await fetch("http://localhost:8080/");
				const data = await res.json();
				console.log(data);
				setData(data);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<section className="flex flex-col gap-5 items-center justify-center h-screen">
			<main className="flex flex-col gap-5 items-center justify-center text-center max-w-[80em]">
				<h1 className="text-[4rem] tracking-tight leading-[1.2] split">
					All‑on‑4 in Brisbane: Full‑Arch Confidence at Aspley Elite Dental
				</h1>
				{data ? (
					<p className="text-[0.938rem] split">{data.description}</p>
				) : (
					<Loader />
				)}
			</main>
		</section>
	);
};

export default Hero;
