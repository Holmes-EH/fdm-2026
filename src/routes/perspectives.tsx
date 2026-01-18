/** biome-ignore-all lint/a11y/noSvgWithoutTitle: sure */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/perspectives")({
	component: PerspectivesPage,
});

function PerspectivesPage() {
	return (
		<main className="min-h-screen bg-linear-to-b from-background to-background/80">
			{/* Navigation Header */}
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
				<div className="text-center space-y-4 mb-12">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 mb-4">
						<svg
							className="w-10 h-10 text-white"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M50 20 L60 35 L75 35 L63 45 L70 60 L50 50 L30 60 L37 45 L25 35 L40 35 Z"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinejoin="round"
							/>
							<circle
								cx="35"
								cy="75"
								r="8"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<circle
								cx="50"
								cy="80"
								r="8"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<circle
								cx="65"
								cy="75"
								r="8"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<path d="M35 67 L35 60" stroke="currentColor" strokeWidth="2" />
							<path d="M50 72 L50 60" stroke="currentColor" strokeWidth="2" />
							<path d="M65 67 L65 60" stroke="currentColor" strokeWidth="2" />
						</svg>
					</div>
					<h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
						Perspectives d'Évolution
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Et après ? Les possibilités sont infinies !
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				{/* Career Paths Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<span className="w-2 h-2 rounded-full bg-indigo-500" />
						Carrières Possibles
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card className="p-6 border-indigo-200/30 hover:border-indigo-400/50 hover:shadow-lg transition-all group">
							<div className="flex gap-4">
								<svg
									className="w-12 h-12 shrink-0 text-indigo-600 group-hover:scale-110 transition-transform"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="20"
										y="30"
										width="60"
										height="45"
										rx="2"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M35 40 L35 50 M50 40 L50 50 M65 40 L65 50"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle cx="50" cy="70" r="4" fill="currentColor" />
								</svg>
								<div>
									<h3 className="font-semibold text-lg mb-2">Chef de Projet</h3>
									<p className="text-muted-foreground">
										Coordonner les équipes, gérer les projets et les délais.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-purple-200/30 hover:border-purple-400/50 hover:shadow-lg transition-all group">
							<div className="flex gap-4">
								<svg
									className="w-12 h-12 shrink-0 text-purple-600 group-hover:scale-110 transition-transform"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="25"
										y="25"
										width="50"
										height="50"
										rx="3"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M35 35 L65 65 M35 65 L65 35"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="50"
										cy="50"
										r="8"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
								<div>
									<h3 className="font-semibold text-lg mb-2">
										Expert en Cybersécurité
									</h3>
									<p className="text-muted-foreground">
										Protéger les données et les systèmes informatiques.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-pink-200/30 hover:border-pink-400/50 hover:shadow-lg transition-all group">
							<div className="flex gap-4">
								<svg
									className="w-12 h-12 shrink-0 text-pink-600 group-hover:scale-110 transition-transform"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="50"
										cy="50"
										r="20"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M30 50 Q50 30 70 50 Q50 70 30 50"
										fill="currentColor"
										opacity="0.3"
									/>
									<circle cx="50" cy="50" r="5" fill="currentColor" />
								</svg>
								<div>
									<h3 className="font-semibold text-lg mb-2">
										Créer sa Startup
									</h3>
									<p className="text-muted-foreground">
										Lancer son propre produit ou service innovant.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-orange-200/30 hover:border-orange-400/50 hover:shadow-lg transition-all group">
							<div className="flex gap-4">
								<svg
									className="w-12 h-12 shrink-0 text-orange-600 group-hover:scale-110 transition-transform"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="40"
										cy="40"
										r="15"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="65"
										cy="40"
										r="15"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="50"
										cy="65"
										r="15"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M50 20 L50 25"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path
										d="M70 50 L75 50"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
								<div>
									<h3 className="font-semibold text-lg mb-2">
										Travail International
									</h3>
									<p className="text-muted-foreground">
										Travailler à l'étranger dans des grandes entreprises.
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>

				{/* Sectors Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<span className="w-2 h-2 rounded-full bg-purple-500" />
						Secteurs d'Activité
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
						{[
							{
								title: "Santé",
								emoji: "🏥",
								color: "from-red-400 to-pink-500",
							},
							{
								title: "Environnement",
								emoji: "🌍",
								color: "from-green-400 to-emerald-500",
							},
							{
								title: "Jeux Vidéo",
								emoji: "🎮",
								color: "from-purple-400 to-indigo-500",
							},
							{
								title: "Finance",
								emoji: "💰",
								color: "from-yellow-400 to-orange-500",
							},
							{
								title: "Transport",
								emoji: "🚗",
								color: "from-blue-400 to-cyan-500",
							},
							{
								title: "Éducation",
								emoji: "📚",
								color: "from-indigo-400 to-purple-500",
							},
							{
								title: "Commerce",
								emoji: "🛍",
								color: "from-pink-400 to-rose-500",
							},
							{
								title: "Médias",
								emoji: "📺",
								color: "from-violet-400 to-fuchsia-500",
							},
						].map((sector) => (
							<Card
								key={sector.title}
								className={`p-6 bg-linear-to-br ${sector.color} text-white hover:shadow-lg transition-all transform hover:scale-105 border-0`}
							>
								<div className="text-4xl mb-3">{sector.emoji}</div>
								<h3 className="font-semibold text-lg">{sector.title}</h3>
								<p className="text-white/80 text-sm mt-2">
									Tout a besoin de code !
								</p>
							</Card>
						))}
					</div>
				</div>

				{/* Salary Section */}
				<div className="mb-16">
					<Card className="p-8 border-2 border-indigo-200/30 hover:border-indigo-300/50 transition-colors bg-linear-to-br from-indigo-50/50 to-purple-50/50">
						<h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
							<span className="w-2 h-2 rounded-full bg-indigo-500" />
							Rémunération
						</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-6 bg-white rounded-lg border border-indigo-100">
								<div className="text-sm text-muted-foreground mb-2">
									Début de Carrière
								</div>
								<div className="text-3xl font-bold text-indigo-600">
									2 000€ - 3 000€
								</div>
								<p className="text-sm text-muted-foreground mt-2">
									Par mois en France
								</p>
							</div>
							<div className="p-6 bg-white rounded-lg border border-purple-100">
								<div className="text-sm text-muted-foreground mb-2">
									Expérience
								</div>
								<div className="text-3xl font-bold text-purple-600">
									3 500€ - 5 000€
								</div>
								<p className="text-sm text-muted-foreground mt-2">
									Après 5-10 ans
								</p>
							</div>
							<div className="p-6 bg-white rounded-lg border border-pink-100">
								<div className="text-sm text-muted-foreground mb-2">
									Senior / Lead
								</div>
								<div className="text-3xl font-bold text-pink-600">5 000€+</div>
								<p className="text-sm text-muted-foreground mt-2">
									Avec expertise reconnue
								</p>
							</div>
						</div>
						<p className="text-muted-foreground mt-6 text-center">
							C'est un métier bien payé, surtout avec l'expérience. Les salaires
							peuvent être plus élevés dans les grandes villes ou les startups
							dynamiques.
						</p>
					</Card>
				</div>

				{/* International Section */}
				<div className="mb-8">
					<Card className="p-8 border-2 border-green-200/30 hover:border-green-300/50 transition-colors">
						<div className="flex items-start gap-6">
							<svg
								className="w-16 h-16 shrink-0 text-green-600"
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
								<path
									d="M50 15 Q75 50 50 85 Q25 50 50 15"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<line
									x1="15"
									y1="50"
									x2="85"
									y2="50"
									stroke="currentColor"
									strokeWidth="2"
								/>
							</svg>
							<div>
								<h2 className="text-3xl font-bold mb-4">
									Opportunités Internationales
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Les développeurs sont recherchés partout dans le monde ! Des
									startup de la Silicon Valley aux grandes entreprises
									asiatiques, les talents en développement sont très demandés.
									Vous pourrez travailler en télétravail, emigrer, ou même
									alterner entre plusieurs pays.
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* CTA Section */}
				<div className="py-12 px-8 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl text-center text-white">
					<h2 className="text-3xl font-bold mb-4">
						Prêt à commencer ton aventure ?
					</h2>
					<p className="text-lg mb-6 opacity-90">
						Les possibilités sont infinies pour un développeur passionné. Votre
						carrière ne fait que commencer !
					</p>
					<Link
						to="/"
						className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
					>
						Retour à l'accueil
					</Link>
				</div>
			</section>
		</main>
	);
}
