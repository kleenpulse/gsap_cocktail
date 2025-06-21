import React from "react";
import { openingHours, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Contact() {
	useGSAP(() => {
		const titleSplit = SplitText.create("#contact h2", {
			type: "words",
		});

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#contact",
				start: "top center",
			},
			ease: "power1.inOut",
		});
		timeline
			.from(titleSplit.words, {
				yPercent: 100,
				opacity: 0,
				duration: 1,
				stagger: 0.02,
			})
			.from("#contact h3, #contact p", {
				opacity: 0,
				yPercent: 100,
				stagger: 0.03,
			})
			.to("#f-right-leaf", {
				y: "-50",
				duration: 1,
				ease: "power1.inOut",
			})
			.to(
				"#f-left-leaf",
				{
					y: "-50",
					duration: 1,
					ease: "power1.inOut",
				},
				"<"
			);
	}, []);

	return (
		<footer id="contact">
			<img
				src="/images/footer-right-leaf.png"
				alt="Footer Right Leaf"
				className="footer-right-leaf"
				id="f-right-leaf"
			/>
			<img
				src="/images/footer-left-leaf.png"
				alt="Footer Left Leaf"
				className="footer-left-leaf"
				id="f-left-leaf"
			/>

			<div className="content">
				<h2>Where to Find Us</h2>

				<div className="we">
					<h3>Visit Us</h3>
					<p>503 5th Ave, New York, NY 10012</p>
				</div>
				<div className="we">
					<h3>Contact Us</h3>
					<p>(212) 555-1234</p>
					<p>hello@cocktaila.drink</p>
				</div>

				<div>
					<h3>Open Every Day</h3>
					{openingHours.map((time) => (
						<p key={time.day}>
							{time.day}: {time.time}
						</p>
					))}
				</div>
				<div>
					<h3>Socials</h3>

					<div className="flex-center gap-5">
						{socials.map((social) => (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.name}
							>
								<img src={social.icon} alt={social.name} className="size-5" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
