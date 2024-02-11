function initThemeStorage() {
	return JSON.parse(localStorage.getItem("theme")) ?? true;
}

function changeThemeStorage(theme) {
	return localStorage.setItem("theme", theme);
}

export { initThemeStorage, changeThemeStorage };
