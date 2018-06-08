;(function () {

	var header = document.querySelector('.js-header');
	var menuBtn = document.querySelector('.js-menu');
	var sidebar = document.querySelector('.js-sidebar')
	var closeSidebar = document.querySelector('.js-sidebar-menu__close');

	function showSidebar() {
		sidebar.classList.add('sidebar-menu--active');
	}

	function hideSidebar() {
		sidebar.classList.remove('sidebar-menu--active');
	}

	menuBtn.onclick = function () {
		showSidebar();
	}

	closeSidebar.onclick = function () {
		hideSidebar();
	}

	window.onscroll = function() {
		setHeaderFixed();
	};

	function setHeaderFixed() {
		if (window.scrollY > 0) {
			header.classList.add('header--active');
		} else {
			header.classList.remove('header--active');
		}
	}

})();