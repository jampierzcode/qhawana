var video = document.getElementById("portada-intro");
// video.muted = true;
// video.autoplay = true;
// setTimeout(() => {
//   video.volume = 0.3;
//   video.muted = false;
// }, 5000);
$(document).ready(function () {
  // Aumenta el volumen al 80% (1 sería el volumen al 100%)
  //   video.volume = 0.8;

  $("#volume-master-video").click(() => {
    let video = document.getElementById("portada-intro");
    console.log(video);
    let actived = $("#volume-master-video").attr("actived");
    console.log(actived);
    if (actived === "true") {
      $("#volume-master-video").html(
        `<ion-icon name="volume-mute"></ion-icon>`
      );
      video.muted = false;
      video.volume = 0.3;
      $("#volume-master-video").attr("actived", false);
    } else {
      $("#volume-master-video").html(
        `<ion-icon name="volume-high"></ion-icon>`
      );
      //   video.muted = true;
      video.volume = 0;

      $("#volume-master-video").attr("actived", true);
    }
  });
});
// $("#portada-intro").ready(function () {
//   console.log("intro video");
//   $("#portada-intro").attr("muted", false);
//   $("#portada-intro").attr("volume", 0.8);
// });
