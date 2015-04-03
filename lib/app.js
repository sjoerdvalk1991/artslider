var APP = APP || {};
var _this = this;


(function(){

  this.dataObject = {};

  this.controller = {
    init: function(){
      _this.xhr.init();
    }
  }

  this.xhr = {
    init: function(){
      var request = pegasus('https://www.rijksmuseum.nl/api/nl/collection?key=hnQJ1CmI&format=json&type=schilderij&artist=rembrandt-harmensz-van-rijn&ps=5&p=6');
      request.then(
        // success handler
        function(data, xhr) {
          // do something useful like
         var art = data;
         this.dataObject = art;

         _this.bindData.init();
        },
        // error handler (optional)
        function(data, xhr) {
          console.log(data, xhr.status)
        }
      ); 
    } 
  }

  this.startSlider = {
    init: function(){
      $('#fullpage').fullpage();
    }

  };

  this.bindData = {
    init: function(){

      var artData = _this.dataObject;
      var i = 1;
      
      for (; i < artData.artObjects.length; i++) {
        img = artData.artObjects[i-1].webImage.url;
        if($('#slide'+(i-1))){
          document.getElementById('slide'+(i-1)).style.background = 'url('+img+')';
        }
        
      };

      _this.startSlider.init();
      
    }
  };

  this.controller.init();


})();