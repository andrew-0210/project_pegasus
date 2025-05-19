"use client";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Hero = () => {
	const [data, setData] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useGSAP(() => {
		SplitText.create(".split", {
			type: "words, chars",
			onSplit(self) {
				// runs every time it splits
				gsap.from(self.chars, {
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

	const subsTenure = {
		weekly: 7,
		monthly: 30,
		quarterly: 90,
		halfYearly: 365 / 2,
		yearly: 365,
	};

	const expiresAt = new Date(
		Date.now() + subsTenure.halfYearly * 24 * 60 * 60 * 1000,
	);
	console.log(`Your subscription ends on ${expiresAt}`);

	const date = expiresAt.getDate() + 1;
	const year = expiresAt.getFullYear();

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const month = monthNames[expiresAt.getMonth()];

	console.log(`Your subscription ends on ${date} ${month} ${year}`);

	return (
		<section className="flex flex-col gap-5 items-center justify-center h-screen">
			<main className="flex flex-col gap-5 items-center justify-center text-center max-w-[80em]">
				<h1 className="text-[4rem] tracking-tight leading-[1.2] split overflow-y-hidden">
					All‑on‑4 in Brisbane: Full‑Arch Confidence at Aspley Elite Dental
				</h1>
				{data ? (
					<p className="text-[0.938rem] split whitespace-pre-line">
						{data.description}{" "}
						{`Your subscription ends on ${date} ${month} ${year}`}
					</p>
				) : (
					<Loader />
				)}
			</main>
		</section>
	);
};

export default Hero;
