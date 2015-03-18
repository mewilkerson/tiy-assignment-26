
matt.Router = Backbone.Router.extend({

  routes: {
    ""         : "clear",
    "show/one" : "showPageOne",
    "show/two" : "showPageTwo"
  },

  initialize: function(){
    var elem = React.createElement(matt.views.FirstView, {
      onShow: this.onShow.bind(this)
    });
    this.comp = React.render(elem, document.body);
  },

  onShow: function(show){
    if (show === "one"){
      this.showPageOne();
      this.navigate("show/one");
    }
    else if (show === "two"){
      this.showPageTwo();
      this.navigate("show/two");
    }
    else {
      this.clear();
      this.navigate("");
    }
  },

  showPageOne: function() {
    this.comp.setProps({show:"one"});
  },

  showPageTwo: function() {
    this.comp.setProps({show:"two"});
  },

  clear: function() {
    this.comp.setProps({show: null});
  }



});