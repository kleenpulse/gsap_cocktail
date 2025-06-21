import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactLenis } from "lenis/react";

import Navbar from "./components/nav-bar";
import Hero from "./components/hero";
import Cocktails from "./components/cocktails";
import About from "./components/about";
import Art from "./components/art";
import Menu from "./components/menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
	return (
		<>
			<ReactLenis root />

			<main className="">
				<Navbar />
				<Hero />
				<Cocktails />
				<About />
				<Art />
				<Menu />
			</main>
		</>
	);
}

export default App;
