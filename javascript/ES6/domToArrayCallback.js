const header = Array.from(document.querySelectorAll('h1'), h1 => {
	console.log(h1.textContent);
	return h1.textContent;
});
