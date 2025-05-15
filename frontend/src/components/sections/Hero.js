"use client";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";

const Hero = () => {
	const [data, setData] = useState("");
	const [isLoading, setIsLoading] = useState(false);

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
			{data ? (
				<main className="flex flex-col gap-5 items-center justify-center text-center max-w-[80em]">
					<h1 className="text-[4rem] tracking-tight leading-[1.2]">
						{data.heading}
					</h1>
					<p className="text-[0.938rem]">{data.description}</p>
				</main>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default Hero;
