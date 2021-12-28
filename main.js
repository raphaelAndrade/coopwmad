$(document).ready(function () {
  ;



  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})

var modal = document.getElementById('id02');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function () {  
  $(".home").on("mouseover", () => {
    $(".mainMenu li .subMenu.homeSubMenu").fadeIn();
    $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
    $(".mainMenu li .subMenu.resourceSubMenu").fadeOut();
    setTimeout(function () {
      $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
    }, 4000);
  });

  $(".mainMenu li .subMenu.homeSubMenu").on("mouseleave", () => {
    $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
  })

  $(".requiredDoc").on("mouseover", () => {
    $(".mainMenu li .subMenu.requiredSubMenu").fadeIn();
    $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
    $(".mainMenu li .subMenu.resourceSubMenu").fadeOut();
    setTimeout(function () {
      $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
    }, 4000);
  });

  $(".resources").on("mouseover", () => {
    $(".mainMenu li .subMenu.resourceSubMenu").fadeIn();
    $(".mainMenu li .subMenu.homeSubMenu").fadeOut();
    $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
    setTimeout(function () {
      $(".mainMenu li .subMenu.resourceSubMenu").fadeOut();
    }, 4000);
  });

  $(".mainMenu li .subMenu.requiredSubMenu").on("mouseleave", () => {
    $(".mainMenu li .subMenu.requiredSubMenu").fadeOut();
  });

  $(".collapsible").on("click", function () {
    if ($(this).parent().find(".internalList").attr('aria-expanded') === true) {
      $(this).find(".collapsibleIcon").empty();
      $(this).find(".collapsibleIcon").append("+");
    } else {
      $(this).find(".collapsibleIcon").empty();
      $(this).find(".collapsibleIcon").append("-");
    }
  })
  $(".headerContent").fadeIn();
  $(".menuResume li").on("click", function (e) {
    e.preventDefault()
    $(".menuResume li").each(function () {
      $(this).removeClass("active");
    })
    $(this).addClass("active");

  

    let currentContent = $(this).attr("data-content");
    switch (currentContent) {
        case "header":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeOut();
          $(".certificationsContent").fadeOut();
          $(".hobbiesContent").fadeOut();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeIn();
        break;
        case "personal":
          $(".personalContent").fadeIn();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeOut();
          $(".hobbiesContent").fadeOut();
          $(".certificationsContent").fadeOut();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeOut();
        break;
        case "workExperience":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeIn();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeOut();
          $(".hobbiesContent").fadeOut();
          $(".certificationsContent").fadeOut();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeOut();
        break;
        case "education":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeIn();
          $(".referenceContent").fadeOut(); 
          $(".hobbiesContent").fadeOut();
          $(".certificationsContent").fadeOut();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeOut();
        break;
        case "reference":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeIn();
          $(".hobbiesContent").fadeOut();
          $(".certificationsContent").fadeOut();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeOut();
        break;
        case "certifications":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeOut();
          $(".hobbiesContent").fadeOut();
          $(".certificationsContent").fadeIn();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeOut();
        break;
        case "skills":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeOut();
          $(".hobbiesContent").fadeOut();
          $(".certificationsContent").fadeOut();
          $(".skillContent").fadeIn();
          $(".headerContent").fadeOut();
        break;
        case "hobbies":
          $(".personalContent").fadeOut();
          $(".workExperienceContent").fadeOut();
          $(".educationContent").fadeOut();
          $(".referenceContent").fadeOut();
          $(".hobbiesContent").fadeIn();
          $(".certificationsContent").fadeOut();
          $(".skillContent").fadeOut();
          $(".headerContent").fadeOut();
        break;
    }
  })

  $(".listButtonSection li").on("click",function(e){
    e.preventDefault()
    let currentButton = $(this).attr("data-content");
    switch (currentButton) {
      case "beforeInterview":
        $(".bgBefore").fadeIn();
        $(".dayOfInterview").fadeOut();
        $(".afterInterviewContainer").fadeOut();
      break;
      case "dayInterview":
        $(".bgBefore").fadeOut();
        $(".dayOfInterview").fadeIn();
        $(".afterInterviewContainer").fadeOut();
      break;
      case "afterInterview":
        $(".bgBefore").fadeOut();
        $(".dayOfInterview").fadeOut();
        $(".afterInterviewContainer").fadeIn();
    }
  })
  
})