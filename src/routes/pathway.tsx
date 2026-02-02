/** biome-ignore-all lint/a11y/noSvgWithoutTitle: ok */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/pathway")({
	component: PathwayPage,
});

function PathwayPage() {
	return (
		<main className="min-h-screen bg-linear-to-b from-background via-background to-secondary/5">
			{/* Header Navigation */}
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
			<section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<div className="text-center space-y-4 mb-12">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 mb-4">
						<svg
							className="w-10 h-10 text-white"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M50 15 L70 35 L70 85 L30 85 L30 35 Z"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinejoin="round"
							/>
							<path
								d="M40 50 L45 60 L55 55 L60 65"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						Comment Devenir Développeur ?
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Découvrez les différents chemins pour accéder au métier de
						développeur, des études traditionnelles à l'autoformation.
					</p>
				</div>

				{/* Education Paths Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<svg
							className="w-8 h-8 text-green-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6.253v13m0-13C6.248 6.253 2 7.826 2 9.5v7c0 1.674 4.248 3.247 10 3.247s10-1.573 10-3.247v-7c0-1.674-4.248-3.247-10-3.247z"
							/>
						</svg>
						Les Études
					</h2>

					<div className="space-y-6">
						{/* Traditional Path */}
						<Card className="p-8 border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all bg-linear-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
							<div className="flex gap-6 items-start">
								<div className="shrink-0">
									<svg
										className="w-14 h-14 text-green-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M12 6.253v13m0-13C6.248 6.253 2 7.826 2 9.5v7c0 1.674 4.248 3.247 10 3.247s10-1.573 10-3.247v-7c0-1.674-4.248-3.247-10-3.247z"
										/>
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-foreground mb-3">
										Formation Traditionnelle
									</h3>
									<p className="text-muted-foreground mb-4">
										Après la 3e : Bac général/technologique (spécialité
										Numérique et sciences informatiques), puis BTS, DUT, licence
										pro ou école d'ingénieur.
									</p>
									<div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 mb-3">
										<p className="text-sm text-muted-foreground">
											<span className="font-semibold text-primary">
												Exemple :
											</span>{" "}
											<a
												href="https://st-joseph-hasparren.fr/lgt-baccalaureat-general"
												target="_blank"
												rel="noopener noreferrer"
												className="text-accent hover:underline"
											>
												Lycée Saint-Joseph Hasparren
											</a>
										</p>
									</div>
								</div>
							</div>
						</Card>

						{/* Self-taught Path */}
						<Card className="p-8 border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all bg-linear-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
							<div className="flex gap-6 items-start">
								<div className="shrink-0">
									<svg
										className="w-14 h-14 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-foreground mb-3">
										Apprentissage en Autodidacte
									</h3>
									<p className="text-muted-foreground">
										On peut aussi apprendre en autodidacte avec des tutoriels en
										ligne gratuits et accessibles.
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>

				{/* Internships Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<svg
							className="w-8 h-8 text-purple-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Les Stages et Projets Personnels
					</h2>

					<Card className="p-8 border-2 border-purple-200 hover:border-purple-500 hover:shadow-lg transition-all">
						<div className="space-y-4">
							<p className="text-lg text-muted-foreground leading-relaxed">
								Faire des stages ou des projets perso (comme un site pour ton
								club de sport) est super utile !
							</p>
							<div className="grid sm:grid-cols-2 gap-4 mt-6">
								<div className="bg-purple-50/50 dark:bg-purple-950/20 p-4 rounded-lg">
									<p className="font-semibold text-foreground mb-2">Stages</p>
									<p className="text-sm text-muted-foreground">
										En entreprise pour acquérir de l'expérience pratique
									</p>
								</div>
								<div className="bg-purple-50/50 dark:bg-purple-950/20 p-4 rounded-lg">
									<p className="font-semibold text-foreground mb-2">
										Projets Perso
									</p>
									<p className="text-sm text-muted-foreground">
										Créer vos propres projets pour démontrer vos compétences
									</p>
								</div>
							</div>
						</div>
					</Card>
				</div>

				{/* Free Resources Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
						<svg
							className="w-8 h-8 text-orange-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6.253v13m0-13C6.248 6.253 2 7.826 2 9.5v7c0 1.674 4.248 3.247 10 3.247s10-1.573 10-3.247v-7c0-1.674-4.248-3.247-10-3.247z"
							/>
						</svg>
						Ressources Gratuites
					</h2>

					<div className="grid sm:grid-cols-3 gap-6">
						{[
							{
								name: "OpenClassrooms",
								url: "https://openclassrooms.com/fr/",
								description:
									"Cours en ligne gratuits et payants sur la programmation",
								icon: "📚",
							},
							{
								name: "Khan Academy",
								url: "https://fr.khanacademy.org/",
								description: "Apprentissage interactif sur l'informatique",
								icon: "🎓",
							},
							{
								name: "Scratch",
								url: "https://scratch.mit.edu/",
								description:
									"Plateforme ludique pour apprendre la programmation",
								icon: "🎮",
							},
						].map((resource) => (
							<a
								key={resource.name}
								href={resource.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group"
							>
								<Card className="p-6 h-full border-2 border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer">
									<div className="text-4xl mb-3">{resource.icon}</div>
									<h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
										{resource.name}
									</h3>
									<p className="text-sm text-muted-foreground">
										{resource.description}
									</p>
								</Card>
							</a>
						))}
					</div>
				</div>

				{/* Career Pathway Timeline */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8">Un Parcours Type</h2>

					<div className="space-y-4">
						{[
							{
								stage: "Collège",
								age: "11-15 ans",
								description:
									"Découvrir l'informatique et les bases de la programmation",
							},
							{
								stage: "Lycée",
								age: "15-18 ans",
								description: "Approfondir avec des spécialités informatiques",
							},
							{
								stage: "Études Supérieures / Autodidacte",
								age: "18+ ans",
								description:
									"Formations spécialisées ou auto-apprentissage intensif",
							},
							{
								stage: "Projets & Stages",
								age: "Pendant les études",
								description:
									"Acquérir de l'expérience pratique et construire son portfolio",
							},
							{
								stage: "Carrière",
								age: "22+ ans",
								description: "Débuter sa carrière en tant que développeur",
							},
						].map((item, index) => (
							<div key={item.stage} className="flex gap-4 items-start">
								<div className="shrink-0">
									<div className="flex items-center justify-center h-10 w-10 rounded-full bg-linear-to-br from-primary to-accent text-white font-bold">
										{index + 1}
									</div>
								</div>
								<Card className="flex-1 p-4 border border-muted/50 hover:border-accent/50 transition-colors">
									<div className="flex justify-between items-start mb-2">
										<h3 className="text-lg font-bold text-foreground">
											{item.stage}
										</h3>
										<span className="text-sm font-semibold text-accent">
											{item.age}
										</span>
									</div>
									<p className="text-muted-foreground">{item.description}</p>
								</Card>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className="bg-linear-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12 text-center border border-primary/20">
					<h2 className="text-3xl font-bold text-foreground mb-4">
						Prêt à Commencer ?
					</h2>
					<p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
						Que tu choisisses la voie traditionnelle ou l'autodidacte,
						l'important est de commencer et de continuer à apprendre. Chaque
						expert a d'abord été un débutant !
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/qualities"
							className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
						>
							Vérifier mes Qualités
						</Link>
						<Link
							to="/"
							className="px-6 py-3 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
						>
							Explorer d'autres Sujets
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
