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

	function close() {
		$(".lightbox").hide("slow");
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
	function lightbox() {
		var image = $(this).find("img").attr("src");
		image = bigify(image);
		var alt = $(this).find("img").attr("alt");

		if($(".lightbox").length > 0) {
			$(".lightbox-content").children("img").attr({
				src: image,
				alt: alt
			});			
		} else { //build lightbox
			var closeIcon = "<div class='close'>" +
			"<img src='images/icons/close.png' alt='Close icon' />" +
			"</div";

			var lightbox = "<div class='lightbox'>" +
			"<div class='lightbox-content'>" +
			closeIcon + "</div>" + "</div>";

			$("body").append(lightbox);
			$(".close").click(close);
			$(".lightbox-content").append($("<img />", {
				src: image,
				alt: alt
			}));
		
			//give relative height to content box			
			var dimension = $(window).height();			
			var dimension = (92 * dimension) / 100;
			dimension = parseInt(dimension) + "px";
			$(".lightbox-content").css("height", dimension);
			$(".lightbox-content").children("img").addClass("height");
		}

		//attach closer on off click
		$(".lightbox").show("slow").on("click", function(e) {
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
	}

	function showInfo() {
		$(this).children(".info").fadeIn(650);
		$(this).find(".title").fadeIn(650);
	}

	function hideInfo() {
		$(this).children(".info").fadeOut(650);
		$(this).children(".title").fadeOut(650);
	}
})();