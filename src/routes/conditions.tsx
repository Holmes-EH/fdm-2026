/** biome-ignore-all lint/a11y/noSvgWithoutTitle: shhh */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ClockIcon, MapPinIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/conditions")({
	component: ConditionsDeTravail,
});

function ConditionsDeTravail() {
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
			<section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="text-center space-y-6 mb-16">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary via-accent/20 to-primary/50 mb-4">
						<MapPinIcon className="w-10 h-10 text-accent" />
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						Où et Comment Travaille un Développeur ?
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Découvrez les conditions de travail, les lieux, horaires et
						l'ambiance dans la vie d'un développeur
					</p>
				</div>
			</section>

			{/* Locations Section */}
			<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="mb-12">
					<h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<MapPinIcon className="w-7 h-7 text-accent" />
						Les Lieux de Travail
					</h3>
					<div className="grid sm:grid-cols-2 gap-6">
						{/* Office/Remote Card */}
						<Card className="p-6 border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all group cursor-default">
							<div className="flex gap-4 items-start mb-4">
								<div className="shrink-0">
									<svg
										className="w-12 h-12 text-accent group-hover:scale-110 transition-transform"
										viewBox="0 0 100 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="15"
											y="25"
											width="70"
											height="55"
											rx="3"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										/>
										<line
											x1="25"
											y1="25"
											x2="25"
											y2="80"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<line
											x1="40"
											y1="25"
											x2="40"
											y2="80"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<line
											x1="55"
											y1="25"
											x2="55"
											y2="80"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<line
											x1="70"
											y1="25"
											x2="70"
											y2="80"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<rect
											x="30"
											y="35"
											width="8"
											height="6"
											fill="currentColor"
											className="text-primary"
										/>
										<rect
											x="50"
											y="40"
											width="8"
											height="6"
											fill="currentColor"
											className="text-primary"
										/>
									</svg>
								</div>
								<h4 className="text-xl font-semibold text-card-foreground">
									En Entreprise ou à Distance
								</h4>
							</div>
							<p className="text-muted-foreground">
								En entreprise, en télétravail, en freelance, ou même dans un
								café avec un ordinateur ! Chacun trouve son environnement idéal.
							</p>
						</Card>

						{/* Team Work Card */}
						<Card className="p-6 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all group cursor-default">
							<div className="flex gap-4 items-start mb-4">
								<div className="shrink-0">
									<svg
										className="w-12 h-12 text-primary group-hover:scale-110 transition-transform"
										viewBox="0 0 100 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="35"
											cy="40"
											r="10"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										/>
										<circle
											cx="65"
											cy="40"
											r="10"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										/>
										<circle
											cx="50"
											cy="65"
											r="10"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										/>
										<circle
											cx="35"
											cy="40"
											r="3"
											fill="currentColor"
											className="text-accent"
										/>
										<circle
											cx="65"
											cy="40"
											r="3"
											fill="currentColor"
											className="text-accent"
										/>
										<circle
											cx="50"
											cy="65"
											r="3"
											fill="currentColor"
											className="text-accent"
										/>
										<path
											d="M40 50 L45 55 L55 50"
											stroke="currentColor"
											strokeWidth="1.5"
											fill="none"
											className="text-accent"
										/>
									</svg>
								</div>
								<h4 className="text-xl font-semibold text-card-foreground">
									Travail en Équipe ou Solo
								</h4>
							</div>
							<p className="text-muted-foreground">
								Parfois en équipe, parfois seul, selon les projets. La
								collaboration et l'autonomie vont de pair dans ce métier.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Schedule Section */}
			<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="mb-12">
					<h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<ClockIcon className="w-7 h-7 text-primary" />
						Les Horaires
					</h3>
					<Card className="p-8 border-2 border-primary/10 hover:border-primary/30 transition-colors">
						<div className="flex items-start gap-6">
							<div className="shrink-0">
								<svg
									className="w-16 h-16 text-primary"
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
									<circle
										cx="50"
										cy="50"
										r="4"
										fill="currentColor"
										className="text-accent"
									/>
									<path
										d="M50 50 L50 30"
										stroke="currentColor"
										strokeWidth="2"
										className="text-accent"
									/>
									<path
										d="M50 50 L65 50"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle cx="50" cy="20" r="3" fill="currentColor" />
									<circle cx="80" cy="50" r="2" fill="currentColor" />
								</svg>
							</div>
							<div className="flex-1">
								<h4 className="text-2xl font-semibold text-card-foreground mb-4">
									Flexibilité et Engagement
								</h4>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Généralement des horaires flexibles, mais il faut parfois
									finir un projet urgent (comme un devoir à rendre !).
									L'équilibre entre flexibilité et responsabilité est clé du
									métier.
								</p>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Equipment & Atmosphere Section */}
			<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="grid sm:grid-cols-2 gap-6 mb-8">
					{/* Material Card */}
					<Card className="p-6 border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all group cursor-default">
						<div className="flex items-start gap-4 mb-4">
							<svg
								className="w-12 h-12 shrink-0 text-accent group-hover:text-primary transition-colors group-hover:scale-110 transform-gpu"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="20"
									y="30"
									width="60"
									height="40"
									rx="3"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<rect
									x="15"
									y="70"
									width="70"
									height="6"
									rx="1"
									fill="currentColor"
								/>
								<circle
									cx="50"
									cy="75"
									r="3"
									fill="currentColor"
									className="text-muted"
								/>
								<path
									d="M30 50 L40 40 M40 40 L50 45 M50 45 L60 35 M60 35 L70 50"
									stroke="currentColor"
									strokeWidth="1.5"
									fill="none"
									opacity="0.5"
								/>
							</svg>
							<h4 className="text-xl font-semibold text-card-foreground">
								Le Matériel
							</h4>
						</div>
						<p className="text-muted-foreground leading-relaxed">
							Un ordinateur performant, un casque pour les réunions vidéo, et
							les logiciels nécessaires. C'est l'essentiel pour bien travailler
							et rester productif.
						</p>
					</Card>

					{/* Atmosphere Card */}
					<Card className="p-6 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all group cursor-default">
						<div className="flex items-start gap-4 mb-4">
							<svg
								className="w-12 h-12 shrink-0 text-primary group-hover:text-accent transition-colors group-hover:scale-110 transform-gpu"
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
									opacity="0.3"
								/>
								<circle
									cx="35"
									cy="35"
									r="8"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<circle
									cx="65"
									cy="35"
									r="8"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<circle
									cx="50"
									cy="60"
									r="8"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<circle
									cx="35"
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
								<circle
									cx="50"
									cy="60"
									r="3"
									fill="currentColor"
									className="text-accent"
								/>
								<path
									d="M40 50 L45 55 L55 50"
									stroke="currentColor"
									strokeWidth="1.5"
									fill="none"
									opacity="0.6"
								/>
							</svg>
							<h4 className="text-xl font-semibold text-card-foreground">
								L'Ambiance
							</h4>
						</div>
						<p className="text-muted-foreground leading-relaxed">
							On discute beaucoup avec les collègues, on teste, on corrige...
							C'est dynamique ! Une bonne ambiance collaborative est essentielle
							au succès des projets.
						</p>
					</Card>
				</div>
			</section>

			{/* Key Takeaways Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border/50">
				<h3 className="text-2xl font-bold mb-8 text-center">En Résumé</h3>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{[
						{ icon: "📍", label: "Flexible" },
						{ icon: "⏰", label: "Adaptable" },
						{ icon: "💻", label: "Numérique" },
						{ icon: "👥", label: "Collaboratif" },
					].map((item) => (
						<div
							key={item.label}
							className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-center"
						>
							<div className="text-3xl mb-2">{item.icon}</div>
							<p className="font-semibold text-sm text-card-foreground">
								{item.label}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
