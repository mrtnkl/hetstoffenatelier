document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener('scroll', scroll);
	scroll();

	function scroll() {
		let hasHash = document.location.href.indexOf('#') != -1;
		let t = document.documentElement.scrollTop;
		if (hasHash || t > window.innerHeight / 4) {
			let hasClass = document.documentElement.className.indexOf('show-menu') != -1;
			if (!hasClass) {
				document.documentElement.className += ' show-menu';
			}
		} else {
			document.documentElement.className = document.documentElement.className.replace(/ show-menu/gi, '');
		}
	}
});
