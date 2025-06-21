import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
	return <main className="flex-center h-dvh">GSAP</main>;
}

export default App;
