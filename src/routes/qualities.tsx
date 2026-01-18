/** biome-ignore-all lint/a11y/noSvgWithoutTitle: stop. get some help */

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/qualities")({
	component: Qualities,
});

function Qualities() {
	const qualities = [
		{
			title: "Logique",
			description: "Aimer résoudre des énigmes, comme dans un jeu vidéo.",
			icon: "logic",
			gradient: "from-blue-500 to-cyan-500",
		},
		{
			title: "Créativité",
			description: "Trouver des solutions originales, comme un inventeur.",
			icon: "creativity",
			gradient: "from-purple-500 to-pink-500",
		},
		{
			title: "Curiosité",
			description: "Vouloir toujours apprendre de nouvelles choses.",
			icon: "curiosity",
			gradient: "from-orange-500 to-red-500",
		},
		{
			title: "Patience",
			description:
				"Parfois, un bug prend du temps à être résolu… mais quelle fierté quand on y arrive !",
			icon: "patience",
			gradient: "from-green-500 to-emerald-500",
		},
		{
			title: "Travail d'équipe",
			description: "Savoir expliquer ses idées et écouter les autres.",
			icon: "teamwork",
			gradient: "from-indigo-500 to-blue-500",
		},
		{
			title: "Anglais",
			description: "Le code, c'est souvent en anglais.",
			icon: "english",
			gradient: "from-rose-500 to-pink-500",
		},
	];

	const renderIcon = (icon: string) => {
		switch (icon) {
			case "logic":
				return (
					<svg
						className="w-12 h-12"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="20"
							y="20"
							width="25"
							height="25"
							rx="2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<rect
							x="55"
							y="20"
							width="25"
							height="25"
							rx="2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<rect
							x="55"
							y="55"
							width="25"
							height="25"
							rx="2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path
							d="M45 32 L55 32"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M32 45 L32 55"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M68 45 L68 55"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<circle cx="32" cy="67" r="3" fill="currentColor" />
						<circle cx="68" cy="67" r="3" fill="currentColor" />
					</svg>
				);
			case "creativity":
				return (
					<svg
						className="w-12 h-12"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M50 15 L60 35 L80 35 L65 50 L72 70 L50 55 L28 70 L35 50 L20 35 L40 35 Z"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
						<circle cx="30" cy="30" r="3" fill="currentColor" />
						<circle cx="70" cy="45" r="3" fill="currentColor" />
					</svg>
				);
			case "curiosity":
				return (
					<svg
						className="w-12 h-12"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="50"
							cy="50"
							r="30"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path
							d="M50 35 L50 50 L65 65"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<circle cx="50" cy="50" r="4" fill="currentColor" />
						<circle cx="35" cy="30" r="4" fill="currentColor" opacity="0.5" />
						<circle cx="70" cy="25" r="3" fill="currentColor" opacity="0.3" />
					</svg>
				);
			case "patience":
				return (
					<svg
						className="w-12 h-12"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="50"
							cy="50"
							r="35"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<circle cx="50" cy="50" r="4" fill="currentColor" />
						<path
							d="M50 50 L50 25"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
						/>
						<path
							d="M50 50 L70 50"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
						/>
						<path
							d="M50 50 L50 75"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeDasharray="3,3"
							strokeLinecap="round"
						/>
					</svg>
				);
			case "teamwork":
				return (
					<svg
						className="w-12 h-12"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="30"
							cy="35"
							r="10"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<circle
							cx="70"
							cy="35"
							r="10"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<circle
							cx="50"
							cy="55"
							r="10"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path
							d="M35 45 Q50 70 65 45"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
							strokeLinecap="round"
						/>
						<circle cx="30" cy="35" r="3" fill="currentColor" />
						<circle cx="70" cy="35" r="3" fill="currentColor" />
						<circle cx="50" cy="55" r="3" fill="currentColor" />
					</svg>
				);
			case "english":
				return (
					<svg
						className="w-12 h-12"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<text
							x="50"
							y="60"
							fontSize="40"
							fontWeight="bold"
							textAnchor="middle"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							A
						</text>
						<circle
							cx="25"
							cy="25"
							r="8"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<circle
							cx="75"
							cy="25"
							r="8"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
				);
			default:
				return null;
		}
	};

	return (
		<main className="min-h-screen bg-linear-to-b from-background via-background to-secondary/5">
			{/* Navigation */}
			<nav className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						<span>Retour</span>
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="text-center space-y-4 mb-16">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary via-accent/20 to-primary/50 mb-4">
						<svg
							className="w-10 h-10 text-accent"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M50 15 L60 35 L80 35 L65 50 L72 70 L50 55 L28 70 L35 50 L20 35 L40 35 Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						Les Super-Pouvoirs d'un Bon Développeur !
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Découvrez les qualités essentielles qui font d'un développeur un
						vrai magicien du numérique.
					</p>
				</div>

				{/* Qualities Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{qualities.map((quality) => (
						<Card
							key={quality.title}
							className="p-6 border-2 border-muted/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group h-full"
						>
							{/* Background gradient on hover */}
							<div
								className={`absolute inset-0 bg-linear-to-br ${quality.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
							/>

							<div className="relative z-10 flex flex-col h-full">
								{/* Icon */}
								<div
									className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br ${quality.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 text-white shadow-md`}
								>
									{renderIcon(quality.icon)}
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
									{quality.title}
								</h3>

								{/* Description */}
								<p className="text-muted-foreground text-sm leading-relaxed flex-1">
									{quality.description}
								</p>

								{/* Accent line */}
								<div
									className={`h-1 bg-linear-to-r ${quality.gradient} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity`}
								/>
							</div>
						</Card>
					))}
				</div>

				{/* Activity Section */}
				<div className="mt-20 pt-12 border-t border-border/50">
					<Card className="p-12 border-2 border-primary/20 hover:border-primary/50 transition-all bg-linear-to-br from-primary/5 to-accent/5">
						<div className="text-center space-y-6">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-accent">
								<svg
									className="w-8 h-8 text-white"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M50 20 L60 40 L80 40 L65 55 L72 75 L50 60 L28 75 L35 55 L20 40 L40 40 Z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h2 className="text-3xl font-bold text-foreground">
								Et vous, quelles qualités pensez-vous qu'il faut pour ce métier
								?
							</h2>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								Explorez votre propre liste de super-pouvoirs et voyez comment
								vous pourriez exceller dans le développement. Chaque qualité
								peut être développée et affinée avec la pratique et
								l'expérience.
							</p>
						</div>
					</Card>
				</div>

				{/* Reflection Section */}
				<div className="mt-16 grid md:grid-cols-2 gap-8">
					<Card className="p-8 border-2 border-muted/50 hover:border-accent/50 transition-all">
						<h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
							<span className="text-2xl">💡</span>
							Développer Vos Qualités
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Les qualités d'un bon développeur ne sont pas innées - elles se
							développent avec le temps, la pratique et l'engagement. Commencez
							par identifier vos forces et travaillez sur les domaines où vous
							souhaitez progresser.
						</p>
					</Card>

					<Card className="p-8 border-2 border-muted/50 hover:border-primary/50 transition-all">
						<h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
							<span className="text-2xl">🚀</span>
							Votre Parcours Commence Ici
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Si vous reconnaissez ces qualités en vous, ou si vous êtes prêt à
							les développer, le monde du développement vous attend ! Il est
							jamais trop tôt pour commencer votre aventure.
						</p>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8 bg-secondary/5 mt-20">
				<div className="max-w-6xl mx-auto text-center text-muted-foreground">
					<p>
						Chaque développeur a commencé quelque part. Votre moment est
						maintenant.
					</p>
				</div>
			</footer>
		</main>
	);
}
