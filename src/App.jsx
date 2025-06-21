import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/nav-bar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
	return (
		<main className="">
			<Navbar />
		</main>
	);
}

export default App;
