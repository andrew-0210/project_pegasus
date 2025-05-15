import Link from "next/link";

const Header = () => {
	return (
		<header>
			<nav className="py-[1rem] px-[2rem] bg-[#1f1f1f]">
				<ul className="flex gap-5 font-semibold">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
