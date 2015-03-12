(function() {
  $(function() {
    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
      slidesColor: ["#00a4e0", "#DE564B", "#1acfa7", "#333", "#f19539"],
      slidesNavigation: true,
      scrollingSpeed: 1500,
      keyboardScrolling: true,
      touchSensitivity: 10,
      continuousVertical: false,
      animateAnchor: true,
      afterLoad: function(anchorLink) {
        if (anchorLink === "fourthPage") {
          $("#section3 .content").addClass("animated fadeInRight");
        }
        if (anchorLink === "thirdPage") {
          $("#section2 .content").addClass("animated fadeInLeft");
        } 
        if (anchorLink === "secondPage") {
          $("#section1 .content").addClass("animated fadeInRight");
        }

      }
    });
    $("#menu").click(function() {
      $('.menu-bars').toggleClass("open");
      return $(".overlay").toggleClass("open");
    });
    return $(".overlay ul li a").click(function() {
      $(".overlay").removeClass("open");
      return $('.menu-bars').removeClass("open");
    });
  });

}).call(this);
