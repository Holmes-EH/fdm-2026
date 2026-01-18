/** biome-ignore-all lint/a11y/noSvgWithoutTitle: stop it */
import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	BrainIcon,
	CodeIcon,
	LaptopIcon,
	RocketIcon,
	SparklesIcon,
	TorusIcon as ToolsIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/career")({
	component: DeveloperCareer,
});

function DeveloperCareer() {
	return (
		<main className="min-h-screen bg-linear-to-b from-background via-background to-secondary/5">
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
			<section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="text-center space-y-6 mb-16">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-accent via-primary/20 to-accent/50 mb-4">
						<CodeIcon className="w-10 h-10 text-primary" />
					</div>
					<h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						Le Magicien du Numérique
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Développeur web / Ingénieur logiciel
					</p>
				</div>

				{/* Main Definition Card */}
				<Card className="mb-12 p-8 border-2 border-primary/10 hover:border-primary/30 transition-colors">
					<div className="flex items-start gap-6">
						<div className="shrink-0">
							<svg
								className="w-16 h-16"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="15"
									y="20"
									width="70"
									height="50"
									rx="4"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="text-primary"
								/>
								<circle
									cx="35"
									cy="35"
									r="3"
									fill="currentColor"
									className="text-accent"
								/>
								<circle
									cx="50"
									cy="35"
									r="3"
									fill="currentColor"
									className="text-accent"
								/>
								<circle
									cx="65"
									cy="35"
									r="3"
									fill="currentColor"
									className="text-accent"
								/>
								<path
									d="M25 50 Q50 65 75 50"
									stroke="currentColor"
									strokeWidth="2"
									fill="none"
									className="text-primary"
								/>
							</svg>
						</div>
						<div className="flex-1">
							<h2 className="text-2xl font-bold text-card-foreground mb-3">
								Un développeur, c'est quelqu'un qui crée...
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								Un développeur crée des sites web, des applications ou des jeux
								vidéo en écrivant du code, un peu comme une recette pour
								l'ordinateur.
							</p>
						</div>
					</div>
				</Card>

				{/* Examples Section */}
				<div className="mb-12">
					<h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
						<SparklesIcon className="w-6 h-6 text-accent" />
						Exemples Concrets
					</h3>
					<div className="grid sm:grid-cols-2 gap-4">
						<Card className="p-6 border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all group">
							<div className="flex gap-4 items-start">
								<svg
									className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="20"
										y="30"
										width="60"
										height="45"
										rx="3"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-accent"
									/>
									<circle
										cx="30"
										cy="40"
										r="2"
										fill="currentColor"
										className="text-accent"
									/>
									<circle
										cx="70"
										cy="40"
										r="2"
										fill="currentColor"
										className="text-accent"
									/>
									<path
										d="M30 60 L40 50 L50 60 L70 40"
										stroke="currentColor"
										strokeWidth="1.5"
										fill="none"
										className="text-primary"
									/>
								</svg>
								<div>
									<h4 className="font-semibold text-card-foreground mb-2">
										Réseaux Sociaux
									</h4>
									<p className="text-sm text-muted-foreground">
										Quand tu utilises TikTok, YouTube ou un jeu mobile, c'est
										grâce au travail de développeurs !
									</p>
								</div>
							</div>
						</Card>
						<Card className="p-6 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all group">
							<div className="flex gap-4 items-start">
								<svg
									className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="15"
										y="25"
										width="70"
										height="50"
										rx="3"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="text-primary"
									/>
									<circle
										cx="50"
										cy="50"
										r="8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										className="text-accent"
									/>
									<path
										d="M50 42 V50 M50 50 H58"
										stroke="currentColor"
										strokeWidth="1.5"
										className="text-accent"
									/>
									<rect
										x="20"
										y="80"
										width="15"
										height="8"
										rx="1"
										fill="currentColor"
										className="text-primary"
									/>
									<rect
										x="65"
										y="80"
										width="15"
										height="8"
										rx="1"
										fill="currentColor"
										className="text-primary"
									/>
								</svg>
								<div>
									<h4 className="font-semibold text-card-foreground mb-2">
										Production Vidéo
									</h4>
									<p className="text-sm text-muted-foreground">
										Je travaille sur un logiciel de production vidéo :
										Captation, Ralentis, Enregistrements...
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>

				{/* Tools Section */}
				<div className="mb-12">
					<h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
						<ToolsIcon className="w-6 h-6 text-primary" />
						Les Outils Essentiels
					</h3>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{[
							{
								icon: "editor",
								title: "Éditeur de Code",
								desc: "VS Code, etc.",
							},
							{ icon: "search", title: "Google", desc: "Chercher, apprendre" },
							{
								icon: "docs",
								title: "Documentation",
								desc: "Références essentielles",
							},
							{ icon: "ai", title: "IA", desc: "ChatGPT, Claude..." },
						].map((tool) => (
							<Card
								key={tool.icon}
								className="p-4 border-muted/50 hover:border-accent/50 transition-colors group"
							>
								<div className="flex flex-col items-center text-center gap-3">
									{tool.icon === "editor" && (
										<svg
											className="w-10 h-10 text-primary group-hover:text-accent transition-colors"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="15"
												y="20"
												width="70"
												height="60"
												rx="3"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<line
												x1="15"
												y1="35"
												x2="85"
												y2="35"
												stroke="currentColor"
												strokeWidth="1"
											/>
											<circle cx="25" cy="27" r="2" fill="currentColor" />
											<circle cx="35" cy="27" r="2" fill="currentColor" />
											<circle cx="45" cy="27" r="2" fill="currentColor" />
										</svg>
									)}
									{tool.icon === "search" && (
										<svg
											className="w-10 h-10 text-accent group-hover:text-primary transition-colors"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="40"
												cy="40"
												r="25"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M60 60 L75 75"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									)}
									{tool.icon === "docs" && (
										<svg
											className="w-10 h-10 text-primary group-hover:text-accent transition-colors"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="25"
												y="15"
												width="50"
												height="70"
												rx="3"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<line
												x1="35"
												y1="30"
												x2="65"
												y2="30"
												stroke="currentColor"
												strokeWidth="1"
											/>
											<line
												x1="35"
												y1="45"
												x2="65"
												y2="45"
												stroke="currentColor"
												strokeWidth="1"
											/>
											<line
												x1="35"
												y1="60"
												x2="55"
												y2="60"
												stroke="currentColor"
												strokeWidth="1"
											/>
										</svg>
									)}
									{tool.icon === "ai" && (
										<svg
											className="w-10 h-10 text-accent group-hover:text-primary transition-colors"
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
											<circle cx="40" cy="40" r="4" fill="currentColor" />
											<circle cx="60" cy="40" r="4" fill="currentColor" />
											<path
												d="M40 60 Q50 70 60 60"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
											/>
										</svg>
									)}
									<h4 className="font-semibold text-sm">{tool.title}</h4>
									<p className="text-xs text-muted-foreground">{tool.desc}</p>
								</div>
							</Card>
						))}
					</div>
				</div>

				{/* Why It's Cool Section */}
				<div className="mb-8">
					<h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
						<RocketIcon className="w-6 h-6 text-accent" />
						Pourquoi C'est Cool ?
					</h3>
					<div className="grid sm:grid-cols-2 gap-6">
						<Card className="p-6 border-accent/20 relative overflow-hidden group">
							<div className="absolute inset-0 bg-linear-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-3">
									<BrainIcon className="w-6 h-6 text-accent" />
									<h4 className="font-semibold">Projets Variés</h4>
								</div>
								<p className="text-muted-foreground">
									On peut travailler sur des projets variés : réseaux sociaux,
									robots, outils pour les médecins, etc.
								</p>
							</div>
						</Card>
						<Card className="p-6 border-primary/20 relative overflow-hidden group">
							<div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-3">
									<LaptopIcon className="w-6 h-6 text-primary" />
									<h4 className="font-semibold">Apprentissage Continu</h4>
								</div>
								<p className="text-muted-foreground">
									C'est un métier où on apprend tous les jours. Les technologies
									évoluent constamment !
								</p>
							</div>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}
