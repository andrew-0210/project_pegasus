exports.getHome = (req, res) => {
	res.json({
		heading:
			"All‑on‑4 in Brisbane: Full‑Arch Confidence at Aspley Elite Dental",
		description:
			"All‑on‑4 in Brisbane lets you walk out with a secure, natural‑looking smile after one surgical visit, even when gum or bone loss has ruled out traditional implants. At our All‑on‑4 clinic in Brisbane, patients find a calm setting, an on‑site lab, and a team that places and restores on the same day, so work meetings, family meals, and weekend sports need little disruption.",
	});
};

exports.getAbout = (req, res) => {
	res.json({
		heading: "About",
		description: "This is a test data",
	});
};
