(function() {
	"use strict";

	$(document).ready(function() {

		if($(window).width() < 800) { //mobile
			mobileNav();
			getInfo();
		} else {
			$(".img-container").click(lightbox);
			$(".img-container").hover(showInfo, hideInfo);			
		}
	});

	//detach and reassign nav and soc
	function mobileNav() {
		var nav = $(".nav");
		nav.detach();
		var menuItems = $("<div>");
		menuItems.addClass("menu hidden");
		menuItems.append(nav).prependTo(".wrap");
		$("<i>").addClass("icon-menu").appendTo(".brand");
		$(".icon-menu").click(function() {
			menuItems.toggle();
		});
		
		//social icons
		var soc = $(".social")
		soc.detach();
		$("aside").remove();

		//switch text to icons
		soc.find("li > a").each(function(i) {
			var name = "icon-" + $(this).text().toLowerCase(); //get icon name
			$(this).text(""); //clear text
			$("<i>").addClass(name).appendTo($(this));
		})

		var socialBar = $("<div>").addClass("socialBar").append(soc).prependTo($(".grid-container"));
	}

	//Closes the lightbox
	function close() {
		$(".lightbox").addClass("hidden");
		$("body").removeClass("overflow");
	}

	//get piece info on mobile
	function getInfo() {
		var canvas = $(".img-container");
		canvas.each(function(i) {
			var title = $(this).find(".title p").text()
			title = $("<p>").text(title);
			var medSize = $(this).find(".medium-size").text();
			medSize = $("<p>").text(medSize);

			var info = $("<div>").addClass("mobInfo").append(title).append(medSize);
			info.prependTo($(this));
		});

	}

	//get big jpg src
	function bigify(image) {
		image = image.replace("thumb", "big");
		image = image.replace(".jpg", "_big.jpg");
		return image;
	}

	//create lightbox
	//Bound to click on '.img-container', 'this' refers to '.img-container'
	function lightbox() {
		var imageSrc = $(this).find("img").attr("src");
		var imageSrc = bigify(imageSrc);
		var alt = $(this).find("img").attr("alt");
		var image = $('<img>').attr({'src': imageSrc, 'alt': alt}).addClass('height');

		showLoader(true);

		image.load(function() {
			showLoader(false);

			if($(".lightbox").length > 0) {
				$(".lightbox-content").children('img').remove();

			} else { //build lightbox
				var closeIcon = "<div class='close'>" +
				"<img src='images/icons/close.png' alt='Close icon' />" +
				"</div";

				var lightbox = "<div class='lightbox hidden'>" +
				"<div class='lightbox-content'>" +
				closeIcon + "</div>" + "</div>";

				var loader = $("<div>").addClass("loader ellipsis center hidden");

				$("body").append(lightbox);
				$(".close").click(close);			
		
				//give relative height to content box			
				var dimension = $(window).height();			
				var dimension = (92 * dimension) / 100;
				dimension = parseInt(dimension) + "px";
				$(".lightbox-content").css("height", dimension);
			}
			$(".lightbox-content").append(image);

			//attach closer on off click
			$(".lightbox").removeClass('hidden').on("click", function(e) {
				if(e.target === this) {
					close();
				}
			});

			//attach closer on esc
			$(document).on("keydown", function(e) {
				if(e.keyCode == 27) { //ESC
					close();
				}
			});

			$("body").addClass("overflow");
		});
	}

	//Pass true to turn on the loader, false to turn it off
	function showLoader(bool) {
		if(bool) {
			$(".loader-wrapper").removeClass("hidden");
		} else {
			$(".loader-wrapper").addClass("hidden");
		}
	}

	//Show painting information
	function showInfo() {
		$(this).children(".info").fadeIn(650);
		$(this).find(".title").fadeIn(650);
	}

	//Hides painting information
	function hideInfo() {
		$(this).children(".info").fadeOut(650);
		$(this).children(".title").fadeOut(650);
	}
})();