$(document).ready(function () {

	if (getCookie("__is_checkout") != null) {
		document.getElementById("pageMain").setAttribute("style", "display: none");
		openCheckout();
		checkoutInit();
	}



	//Фиксированная шапка при скроле
	function fixedHeader() {
		var topp = $('.topline-row').height();;
		function fixScroll() {
			if (window.scrollY > topp) {
				$(".header").addClass("fixed");
			}
			if (window.scrollY < topp) {
				$(".header").removeClass("fixed");
			}
		}

		fixScroll();

		$(window).scroll(function () {
			fixScroll();
		});
	}
	fixedHeader();

	$(window).resize(function () {
		fixedHeader();
	});

	//Скролл к блоку
	$("a.go").click(function (e) {
		e.preventDefault();
		var $link = $(this),
			id = $link.attr("href");
		$("html, body").animate(
			{
				scrollTop: $(id).offset().top - 150,
			},
			1200
		);
		if ($(window).width() < 992) {
			$(".info-center-content-wrp .sticky-block").removeClass("visible");
			$(".js-open-close-infocenter-menu").removeClass("active");
			$(".info-center-mobile-search").removeClass("visible");
			$(".js-close-infocenter-search").hide();
			$(".js-open-infocenter-search").show();
			$(".js-open-close-infocenter-menu").show();
		} else {
			$(".search-result").hide();
			$(".info-center-search-input-wrp__input").val("");
			$(".remove-search").hide();
		}
	});

	//Выбор количества товаров
	$('.quantity-block__button').click(function (e) {
		e.preventDefault();
		let currentButton = $(this);
		let itemsInput = $('.quantity-block__input');
		let itemsInputValue = $('.quantity-block__input').val();
		if (currentButton.hasClass('plus')) {
			itemsInput.val(Number(itemsInputValue) + 1);
		}
		if (currentButton.hasClass('minus')) {
			itemsInput.val(Number(itemsInputValue) - 1);
			if (Number(itemsInputValue) <= 1) {
				itemsInput.val('1');
			}
		}
	});

	//Проставляем первую букву имени в аватар
	$(".review-item").each(function () {
		let currentName = $(this).find('.review-item-head__name');
		let currentNameText = $(this).find('.review-item-head__name').text();
		$(this).find('.review-item-head__avatar-text').text(currentNameText[0]);
	});

	//Рандомный цвет для аватарок
	function randColor() {
		let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
		return `rgb(${rand()},${rand()},${rand()})`;
	}

	$(".review-item").each(function () {
		$(this).find('.review-item-head__avatar').css('background-color', randColor());
	});

	//Проставление лайка-дизлайка
	$('.like-diselike__link').click(function (e) {
		e.preventDefault();
		let currentAction = $(this);
		currentActionText = currentAction.text();
		currentAction.addClass('active');
		console.log(currentActionText);
		currentAction.find('.like-diselike__value').text(Number(currentActionText) + 1);
		currentAction.closest('.like-diselike').addClass('noclick');
	});

	//Показать больше
	$('.js-load-more').click(function (e) {
		e.preventDefault();
		let currentLoadMore = $(this);
		currentLoadMore.closest('.reviews-content').find('div.hidden').removeClass('hidden');
		$('.reviews-content').find('.four-stars').show();
		currentLoadMore.remove();
	});

	//Фильтрация комментариев при клике на рейтинг
	$('.rating-list__link').click(function (e) {
		e.preventDefault();
		let currentSortingLink = $(this);
		$('.load-more-block').hide();
		if (currentSortingLink.hasClass('js-sorting-five')) {
			console.log('test');
			$('.reviews-content').find('.four-stars').hide();
			$('.reviews-content').find('.five-stars').show();
			$('.reviews-content').find('.hidden').removeClass('hidden');
		} else if (currentSortingLink.hasClass('js-sorting-four')) {
			$('.reviews-content').find('.four-stars').show();
			$('.reviews-content').find('.five-stars').hide();
			$('.reviews-content').find('.hidden').removeClass('hidden');
		}
	});



	// Initialize the product slider
	$(".product-slider-for").on(
		"init",
		function (event, slick) {
			$(this).css("visibility", "visible");
		}
	);

	if ($(".product-slider-for").length > 0) {
		$(".product-slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 400,
			arrows: false,
			dots: false,
			infinite: true,
			fade: true,
			asNavFor: '.product-slider-nav'
		});
	}

	$(".product-slider-nav").on(
		"init",
		function (event, slick) {
			$(this).css("visibility", "visible");
		}
	);

	if ($(".product-slider-nav").length > 0) {
		$(".product-slider-nav").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 400,
			arrows: false,
			dots: false,
			focusOnSelect: true,
			infinite: true,
			fade: false,
			swipe: true,
			swipeToSlide: true,
			asNavFor: '.product-slider-for',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: true,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: true,
					}
				}
			]
		});

		// Event listener for slide change
		$(".product-slider-nav").on('afterChange', function (event, slick, currentSlide) {
			// Update the active state of the corresponding parameters list item
			updateActiveParameterLink(currentSlide + 1);
		});
	}

	// Function to update the active parameter link
	function updateActiveParameterLink(slideIndex) {
		// Remove active class from all links
		$('.parameters-list__item').removeClass('active');

		// Add active class to the link with the corresponding data-slide attribute
		$(`.parameters-list__link[data-slide="${slideIndex}"]`).closest('.parameters-list__item').addClass('active');
	}

	// Active parameter link click event
	$('.parameters-list__link').click(function (e) {
		e.preventDefault();
		let currentLink = $(this);

		// Update active state
		currentLink.closest('.parameters-list__item').siblings('.parameters-list__item').removeClass('active');
		currentLink.closest('.parameters-list__item').addClass('active');

		// Navigate to the corresponding slide
		var slideno = $(this).data('slide');
		$('.product-slider-nav').slick('slickGoTo', slideno - 1);
	});


	const productSelections = document.querySelectorAll("#productSelection");
	const selectedProductName = document.getElementById("selectedProductName");


	productSelections.forEach(selection => {
		selection.addEventListener("click", function () {
			// Remove 'selected' class from all elements
			productSelections.forEach(item => item.classList.remove("selected"));

			// Add 'selected' class to the clicked element
			this.classList.add("selected");

			// Update the selected product name
			const selectedColor = this.getAttribute("data-color");
			selectedProductName.textContent = selectedColor;
		});
	});


	const buyButtons = document.querySelectorAll('#buyButton');
	buyButtons.forEach(buyButton => {
		buyButton.addEventListener('click', () => {
			const selectedElement = document.querySelector('.parameters-list__item.active');
			if (selectedElement == null) {
				alert("¡Seleccione el color deseado para continuar!");
				return;
			}
			// console.log(selectedElement);
			lsSelectProduct(selectedElement.getAttribute("data-id"));
			document.getElementById("pageMain").setAttribute("style", "display: none");
			openCheckout();
			checkoutInit();
		});
	});

});
