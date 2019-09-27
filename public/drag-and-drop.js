function start(){
  window.loadScript = function(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    // If the browser is Internet Explorer
    if (script.readyState){
      script.onreadystatechange = function() {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
      // For any other browser
    } else {
      script.onload = function() {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  window.AppStart = function($) {
  	$('body').append('<button class="open-button">Customize</button><style>.open-button{background-color: #555;color: white;padding: 16px 20px;border: none;cursor: pointer;font-weight: bold;opacity: 0.8;position: fixed;bottom: 23px;right: 28px;width: 123px;}</style>')
  }
}

start();

if(typeof window.appton !== 'undefined'){
  console.log("Jquery version==>",jQuery.fn.jquery);
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js', function() {
    jQuery340 = jQuery.noConflict(true);
      AppStart(jQuery340);
  });
}else{
    AppStart(jQuery);
}