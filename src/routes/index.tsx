/** biome-ignore-all lint/a11y/noSvgWithoutTitle: quiet ! */

import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const sections = [
		{
			id: "career",
			title: "Description du Métier",
			subtitle: "Le Magicien du Numérique",
			description:
				"Découvrez ce qu'est un développeur, les exemples concrets, les outils essentiels et pourquoi c'est cool.",
			icon: "code",
			href: "/career",
			color: "from-blue-500 to-cyan-500",
		},
		{
			id: "conditions",
			title: "Conditions de Travail",
			subtitle: "Où et Comment Travaille un Développeur ?",
			description:
				"Explorez les lieux de travail, les horaires, le matériel nécessaire et l'ambiance en équipe.",
			icon: "location",
			href: "/conditions",
			color: "from-purple-500 to-pink-500",
		},
		{
			id: "qualities",
			title: "Qualités Requises",
			subtitle: "Les Super-Pouvoirs d'un Bon Développeur",
			description:
				"Découvrez les qualités essentielles : logique, créativité, curiosité, patience, travail d'équipe et anglais.",
			icon: "qualities",
			href: "/qualities",
			color: "from-amber-500 to-orange-500",
		},
		{
			id: "pathway",
			title: "Devenir Développeur",
			subtitle: "Comment Devenir Développeur ?",
			description:
				"Explorez les différents chemins : études traditionnelles, autodidacte, stages et ressources gratuites.",
			icon: "pathway",
			href: "/pathway",
			color: "from-green-500 to-emerald-500",
		},
		{
			id: "perspectives",
			title: "Perspectives d'Évolution",
			subtitle: "Et Après ? Les Possibilités Sont Infinies !",
			description:
				"Découvrez les carrières possibles, secteurs, salaires et opportunités internationales.",
			icon: "perspectives",
			href: "/perspectives",
			color: "from-indigo-500 to-pink-500",
		},
	];

	const renderIcon = (icon: string) => {
		switch (icon) {
			case "code":
				return (
					<svg
						className="w-16 h-16"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="15"
							y="25"
							width="70"
							height="50"
							rx="4"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						/>
						<path
							d="M30 50 L20 60 L30 70"
							stroke="currentColor"
							strokeWidth="2.5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M70 50 L80 60 L70 70"
							stroke="currentColor"
							strokeWidth="2.5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<line
							x1="45"
							y1="35"
							x2="55"
							y2="75"
							stroke="currentColor"
							strokeWidth="2"
						/>
					</svg>
				);
			case "location":
				return (
					<svg
						className="w-16 h-16"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M50 15 C50 15, 30 35, 30 50 C30 65, 40 75, 50 75 C60 75, 70 65, 70 50 C70 35, 50 15, 50 15 Z"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						/>
						<circle cx="50" cy="50" r="8" fill="currentColor" />
					</svg>
				);
			case "qualities":
				return (
					<svg
						className="w-16 h-16"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M50 15 L60 35 L80 35 L65 50 L72 70 L50 55 L28 70 L35 50 L20 35 L40 35 Z"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinejoin="round"
						/>
						<circle cx="35" cy="25" r="4" fill="currentColor" opacity="0.7" />
						<circle cx="70" cy="40" r="3" fill="currentColor" opacity="0.5" />
					</svg>
				);
			case "pathway":
				return (
					<svg
						className="w-16 h-16"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="15"
							y="20"
							width="20"
							height="20"
							rx="2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						/>
						<rect
							x="40"
							y="20"
							width="20"
							height="20"
							rx="2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						/>
						<rect
							x="65"
							y="20"
							width="20"
							height="20"
							rx="2"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						/>
						<path d="M35 30 L40 30" stroke="currentColor" strokeWidth="2" />
						<path d="M60 30 L65 30" stroke="currentColor" strokeWidth="2" />
						<line
							x1="25"
							y1="40"
							x2="25"
							y2="50"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<line
							x1="50"
							y1="40"
							x2="50"
							y2="50"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<line
							x1="75"
							y1="40"
							x2="75"
							y2="50"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<circle
							cx="25"
							cy="60"
							r="6"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<circle
							cx="50"
							cy="60"
							r="6"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<circle
							cx="75"
							cy="60"
							r="6"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path d="M31 60 L44 60" stroke="currentColor" strokeWidth="2" />
						<path d="M56 60 L69 60" stroke="currentColor" strokeWidth="2" />
						<path
							d="M25 66 L25 75 Q50 80 75 75 L75 66"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				);
			case "perspectives":
				return (
					<svg
						className="w-16 h-16"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M50 20 L60 35 L80 35 L65 50 L72 70 L50 55 L28 70 L35 50 L20 35 L40 35 Z"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinejoin="round"
						/>
						<circle cx="30" cy="85" r="4" fill="currentColor" opacity="0.8" />
						<circle cx="50" cy="85" r="4" fill="currentColor" opacity="0.6" />
						<circle cx="70" cy="85" r="4" fill="currentColor" opacity="0.4" />
						<path
							d="M30 81 L50 77 L70 73"
							stroke="currentColor"
							strokeWidth="1.5"
							fill="none"
							strokeLinecap="round"
						/>
					</svg>
				);
			default:
				return null;
		}
	};

	return (
		<main className="min-h-screen bg-linear-to-b from-background via-background to-secondary/5">
			{/* Hero Section */}
			<section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="text-center space-y-6 mb-20">
					<div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-linear-to-br from-primary via-accent/30 to-primary/50 mb-6 shadow-lg">
						<svg
							className="w-12 h-12 text-accent"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="50"
								cy="50"
								r="40"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<path
								d="M50 20 L60 40 L80 40 L65 55 L72 75 L50 60 L28 75 L35 55 L20 40 L40 40 Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<h1 className="text-5xl sm:text-6xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
						Explorer la Carrière
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Découvrez le monde fascinant du développement logiciel et de
						l'ingénierie web. Explorez les différentes facettes de cette
						carrière passionnante.
					</p>
				</div>

				{/* Navigation Cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{sections.map((section) => (
						<Link key={section.id} to={section.href} className="group">
							<Card className="p-8 h-full border-2 border-muted/50 hover:border-accent/50 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
								{/* Background gradient on hover */}
								<div
									className={`absolute inset-0 bg-linear-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
								/>

								<div className="relative z-10 flex flex-col h-full">
									{/* Icon */}
									<div
										className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${section.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
									>
										<div className="text-white">{renderIcon(section.icon)}</div>
									</div>

									{/* Content */}
									<h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
										{section.title}
									</h2>

									<h3 className="text-sm font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
										{section.subtitle}
									</h3>

									<p className="text-muted-foreground flex-1 leading-relaxed mb-6">
										{section.description}
									</p>

									{/* CTA */}
									<div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
										<span>Découvrir</span>
										<svg
											className="w-5 h-5 group-hover:translate-x-1 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>
								</div>
							</Card>
						</Link>
					))}
				</div>

				{/* Info Section */}
				<div className="mt-20 pt-12 border-t border-border/50">
					<div className="text-center space-y-8">
						<h2 className="text-3xl font-bold text-foreground">
							Votre Guide Complet vers le Développement
						</h2>

						<div className="grid md:grid-cols-3 gap-6 mt-12">
							{[
								{
									number: "01",
									title: "Description",
									description:
										"Comprenez les fondamentaux du métier et ses différentes spécialités.",
								},
								{
									number: "02",
									title: "Conditions",
									description:
										"Découvrez les environnements de travail, horaires et équipements.",
								},
								{
									number: "03",
									title: "Exploration",
									description:
										"Explorez chaque aspect en détail avec des exemples concrets.",
								},
							].map((item) => (
								<div key={item.number} className="space-y-4">
									<div className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
										{item.number}
									</div>
									<h3 className="text-xl font-bold text-foreground">
										{item.title}
									</h3>
									<p className="text-muted-foreground">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8 bg-secondary/5">
				<div className="max-w-6xl mx-auto text-center text-muted-foreground">
					<p>
						Explorez, apprenez et découvrez votre passion pour le développement.
					</p>
				</div>
			</footer>
		</main>
	);
}
