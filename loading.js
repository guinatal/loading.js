var loading = {
  /*
    Initialize the loading
  */
  initialize: function(value){

    if(this.exists()){
      return;
    }

    if(value == null){
      value = "";
    }

    var loading = document.getElementById("loading_");

    loading.innerHTML += "<div id='loading_1'><span>" + value + "</span><div id='container_'><div class='ring_ blue_'></div><div id='content_'></div></div></div>";
  },
  /*
    Close loading
  */
  close: function(){

    if(this.exists()){
      var loading = document.getElementById("loading_");

      loading.innerHTML = "";
    }

  },
  /*
    Check if the loading is already initialized
  */
  exists: function(){

    var container = document.getElementById("container_");

    if(container){
      return true;
    }
    else{
      return false;
    }
  }
};
