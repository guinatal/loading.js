var loading = {
  /*
    Initialize the loading
  */
  initialize: function(value){

    if(this.exists()){
      return;
    }

    if(value == null){
      value = "loading...";
    }

    $("body").append("<div id='loading_'>" + value + "</div>");

    $('#loading_').css({
      "box-shadow": "0 0 0 10000px rgba(0, 0, 0, 0.7)",
      "position": "fixed",
      "top": "50%",
      "left": "50%",
      "background-color": "white",
      "font-size": "12px",
      "font-family": "Arial",
      "width": "30%",
      "margin-left": "-15%",
      "padding": "15px 0",
      "border-radius": "3px",
      "text-align": "center"
    });
  },
  /*
    Close loading
  */
  close: function(){

    if(this.exists()){
      $("#loading_").remove();
    }

  },
  /*
    Check if the loading is already initialized
  */
  exists: function(){
    var $loading = $("#loading_");

    if($loading.length){
      return true;
    }
    else{
      return false;
    }
  }
};
