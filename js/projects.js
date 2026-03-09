const PROJECT_COPY = {
	pt: {
		loading: "Carregando projetos...",
		empty: "Nenhum projeto público encontrado no momento.",
		error: "Não foi possível carregar os projetos agora. Veja o perfil completo no GitHub.",
		fallbackDescription: "Repositório público com código e experimentos técnicos.",
		mixedStack: "Stack variada",
		starsLabel: "estrelas",
		updatedLabel: "Atualizado em",
	},
	en: {
		loading: "Loading projects...",
		empty: "No public projects found right now.",
		error: "Unable to load projects right now. Check the full profile on GitHub.",
		fallbackDescription: "Public repository with code and technical experiments.",
		mixedStack: "Mixed stack",
		starsLabel: "stars",
		updatedLabel: "Updated on",
	},
};

const resolveProjectsLanguage = (language) => {
	if (language) {
		return language === "en" ? "en" : "pt";
	}
	return document.documentElement.lang.toLowerCase().startsWith("en") ? "en" : "pt";
};

document.addEventListener("DOMContentLoaded", async () => {
	const projectsContainer = document.getElementById("projects-list");
	const statusElement = document.getElementById("projects-status");

	if (!projectsContainer || !statusElement) {
		return;
	}

	const state = {
		repos: [],
		loading: true,
		error: false,
	};

	let currentLanguage = resolveProjectsLanguage();

	const createMetaPill = (label) => {
		const span = document.createElement("span");
		span.textContent = label;
		return span;
	};

	const createProjectCard = (repo) => {
		const copy = PROJECT_COPY[currentLanguage];

		const card = document.createElement("a");
		card.className = "project-card";
		card.href = repo.html_url;
		card.target = "_blank";
		card.rel = "noopener noreferrer";

		const title = document.createElement("h3");
		title.textContent = repo.name;

		const description = document.createElement("p");
		description.textContent = (repo.description || copy.fallbackDescription).trim();

		const meta = document.createElement("div");
		meta.className = "project-meta";

		const language = repo.language || copy.mixedStack;
		const stars = Number(repo.stargazers_count || 0);
		const updatedAt = new Date(repo.pushed_at).toLocaleDateString(
			currentLanguage === "en" ? "en-US" : "pt-BR",
			{
				year: "numeric",
				month: "short",
				day: "numeric",
			}
		);

		meta.appendChild(createMetaPill(language));
		meta.appendChild(createMetaPill(`${stars} ${copy.starsLabel}`));
		meta.appendChild(createMetaPill(`${copy.updatedLabel} ${updatedAt}`));

		card.appendChild(title);
		card.appendChild(description);
		card.appendChild(meta);

		return card;
	};

	const renderProjects = () => {
		const copy = PROJECT_COPY[currentLanguage];
		projectsContainer.textContent = "";

		if (state.loading) {
			statusElement.textContent = copy.loading;
			return;
		}

		if (state.error) {
			statusElement.textContent = copy.error;
			return;
		}

		if (!state.repos.length) {
			statusElement.textContent = copy.empty;
			return;
		}

		statusElement.textContent = "";
		state.repos.forEach((repo) => {
			projectsContainer.appendChild(createProjectCard(repo));
		});
	};

	document.addEventListener("siteLanguageChange", (event) => {
		currentLanguage = resolveProjectsLanguage(event.detail && event.detail.language);
		renderProjects();
	});

	renderProjects();

	try {
		const response = await fetch(
			"https://api.github.com/users/ianbs/repos?sort=updated&per_page=12",
			{ headers: { Accept: "application/vnd.github+json" } }
		);

		if (!response.ok) {
			throw new Error(`Erro ao carregar projetos (${response.status}).`);
		}

		const repos = await response.json();
		state.repos = repos
			.filter((repo) => !repo.fork)
			.sort(
				(a, b) =>
					new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
			)
			.slice(0, 6);
		state.loading = false;
		renderProjects();
	} catch (error) {
		state.loading = false;
		state.error = true;
		renderProjects();
		console.error(error);
	}
});
