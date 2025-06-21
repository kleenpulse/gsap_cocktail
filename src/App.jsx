import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactLenis, useLenis } from "lenis/react";

import Navbar from "./components/nav-bar";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
	return (
		<>
			<ReactLenis root />

			<main className="">
				<Navbar />
				<Hero />
				<div className="min-h-screen bg-black" />
			</main>
		</>
	);
}

export default App;
