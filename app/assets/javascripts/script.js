
// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//faceBook script------------

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

    //facebook script ends------


    //Google Map script strats---------


      function initMap() {
      var myLatlng = {lat: 37.747446, lng: -121.456481};

      var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatlng
      });

      var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      //title: 'Hello World!'
      });
     }

//-------direction-------
     

    //Google Map script ends------------



  $(document).ready(function(){
      $(".contact-us").css("border", "2px solid blue");
      $("#input-text").css("border", "2px solid green");

      // Smooth scrolling
      var $root = $('html, body');
      $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
          window.location.hash = href;
      });
      return false;
    });

      // Tooltips

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    

       //---for submit button to capture what's in the text-area.

      $("#submitBtn").on("click", function() {
          // now we're going to work in here
        

        var charCount = $("#input-text").val().length;

          if (charCount == 0) {
            $("#input-text").css("border", "5px solid red");
            alert("Please type message before submit.");
          } 

          else {

          $("#input-text").hide();
          var comment = $("#input-text").val();
          $("#visible-comment").html(comment);
          console.log(comment);
          alert("Your message has been received. Thanks! Click OK to go back to the web site.");
      
          };
          return false;
        });

      //keyup function--------

      $("#input-text").on("keyup", function() {
        console.log("keyup happened"); //here we make sure we're catching the keyup

        // in here is where the rest of our code for this lesson will go
        var charCount = 200;         
        var charCount = $("#input-text").val().length;
        console.log(charCount);

        $("#char-count").html(charCount); //here we show a running character count to the user
       

        if (charCount < 50) {
          $("#char-count, #input-text").css("color", "black");
        } else if (charCount >= 100) {
          $("#char-count, #input-text").css("color", "red");
        } else {
          $("#char-count, #input-text").css("color", "green");
        };

      });

        //works.js-------------
        
        
var works = [
  {
    title: "Wondering",
    pic:  "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg",
    site:  "http://www.disneyland.com"
  },
  {
    title: "Cute",
    pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg",
    site: "https://www.cutecats.com"
  },
  {
    title: "Loving",
    pic:  "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg",
    site: "http://www.youramazingplaces.com"
  },
   {
    title: "Praying",
    pic:  "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg",
    site: "https://www.youtube.com/watch?v=Y4DgESWtCus"
  }
];
console.log(works);

for(var i = 0; i < works.length; ++i) {
  $("#work").append("\
  <div class='col-sm-6 col-md-3'>\
    <a href='"+ works[i].site + "' class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
       <span class='info'><p class='proj-title'>This one is</p>" + works[i].title + "</span>\
       <span class='sites' src=" + works[i].site + ">" + works[i].site + "</span>\
    </a>\
  </div>\
");

  $(".work-img").mouseenter(function() {
    $(".info", this).show();
    $(".sites", this).show();
  }).mouseleave(function() {
    $(".info", this).hide();
    $(".sites", this).hide();
  });

  
  var images = $("#work img");
  
  if(i === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
  } else if(i === 3){
      $(images[i]).css("border", "2px solid salmon");
  } else {
    $(images[i]).css("border", "4px solid green")
  };
 };

 });
      
    
    

    




