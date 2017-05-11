alert("JS loaded"); //test
$(document).ready(function(){
alert("jQuery works"); //test

// ---------- vars ----------

var imgsDir = "imgs/";
var extSlideshow = document.getElementById('extSlideshow');

// ---------- functions ----------

function createSlides(slides, slidesEl) {
    // populate slides & thumbnails
    var tempStr = "";
    for (var i = 0; i < slides.length; i++) {
        tempStr += "<li style='padding-right: 15%;'><table width='100%' class='slideTable'><tr>";
        tempStr += "<td width='30%'><img src='" + imgsDir + slides[i].img + "' /></td>";
        tempStr += "<td class='text-center'><h3 style='font-weight: 700;'>" + slides[i].title + "</h3>";
        tempStr += "<div class='slideText'>" + slides[i].descr + "</div>";
        if (slides == extSlides) {      // if setting up extensions slides
            tempStr += "<p><span class='slideSmallText'>Available for: </span>";
            if (!!slides[i].chrome) {
                tempStr += "<a class='slideLink' href='" + slides[i].chrome + "' target='_blank'>Chrome</a> | ";
            }
            if (!!slides[i].firefox) {
                tempStr += "<a class='slideLink' href='" + slides[i].firefox + "' target='_blank'>Firefox</a> | ";
            }
            if (!!slides[i].opera) {
                tempStr += "<a class='slideLink' href='" + slides[i].opera + "' target='_blank'>Opera</a> | ";
            }
        }
        else if (slides == ossSlides) {     // if setting up OSS slides
            tempStr += "<p><span class='slideSmallText'>On </span>";
            if (!!slides[i].github) {
                tempStr += "<a class='slideLink' href='" + slides[i].github + "' target='_blank'>GitHub</a> | ";
            }
            if (!!slides[i].bitbucket) {
                tempStr += "<a class='slideLink' href='" + slides[i].bitbucket + "' target='_blank'>BitBucket</a> | ";
            }            
        }
        // remove any trailing pipes
        if (tempStr.slice(-3) == " | ") { tempStr = tempStr.slice(0, tempStr.length - 3); }
        tempStr += "</p></td></tr></table></li>";
    }
    slidesEl.innerHTML = tempStr;
}


// ---------- event handlers ----------




// ---------- start ----------

$.getScript("http://freginold.github.io/fontSwitcher/fontSwitcher.min.js", function () {
    /* do something when loaded */
    fontSwitcher(['Anton#g', 'Verdana', 'sans-serif'], '.contentHeader');
    fontSwitcher(['Schoolbell#g', 'sans-serif'], '.footer');
    fontSwitcher(['Exo#g', 'Verdana', 'sans-serif'], '#navbar');
  });

createSlides(extSlides, extSlideshow);
createSlides(ossSlides, ossSlideshow);

$('#extSlideshow').bxSlider({
    mode: 'fade',
    speed: 1200,
    auto: true,
    pause: 5200,
    autoHover: true
});

$('#ossSlideshow').bxSlider({
    mode: 'fade',
    speed: 1200,
    auto: true,
    pause: 6000,
    autoHover: true
});

});
