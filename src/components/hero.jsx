import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";

export default function Hero() {
	useGSAP(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);

		const heroSplit = new SplitText(".title", {
			type: "chars, words",
		});
		const paragraphSplit = new SplitText(".subtitle", {
			type: "lines",
		});

		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.08,
			delay: 0.2,
		});

		gsap.from(paragraphSplit.lines, {
			yPercent: 100,
			opacity: 0,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.08,
			delay: 1,
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(
				".left-leaf",
				{
					y: -250,
				},
				0
			)
			.to(
				".right-leaf",
				{
					y: 250,
				},
				0
			);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);
	}, []);

	return (
		<>
			<section id="hero" className="noisy">
				<div className="relative overflow-y-clip">
					<h1 className="title uppercase">Berious</h1>
				</div>

				<img
					src="/images/hero-left-leaf.png"
					alt="Left Leaf"
					className="left-leaf"
				/>
				<img
					src="/images/hero-right-leaf.png"
					alt="Right Leaf"
					className="right-leaf"
				/>

				<div className="body">
					<div className="content">
						<div className="space-y-5 hidden md:block">
							<p>Cool. Crisp. Classic.</p>
							<p className="subtitle">
								Sip the taste
								<br /> of summer
							</p>
						</div>

						<div className="view-cocktails">
							<p className="subtitle">
								Every cocktail on our menu is a blend of premium spirits and
								fresh ingredients, crafted to perfection.
								<br />
								<a href="#cocktails" className="btnx">
									View Cocktails
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
