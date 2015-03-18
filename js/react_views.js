matt.views = {};

(function(views){



var PageOne = React.createClass({displayName: "PageOne",

  render: function(){
    return (React.createElement("h1", null, "Page One"));
  }

});

var PageTwo = React.createClass({displayName: "PageTwo",

  render: function(){
    return (React.createElement("h1", null, "Page Two"));
  }

});

var FirstView = React.createClass({displayName: "FirstView",

  getView: function(show) {
    if (show === "one"){
      return React.createElement(PageOne, null)
    }
    else if (show === "two"){
      return React.createElement(PageTwo, null)
    }
  },

  onNav: function(show){
    this.props.onShow(show);
  },

  render: function(){
    var showing = this.getView(this.props.show);
    return (
      React.createElement("div", null, 
        React.createElement("ul", null, 
          React.createElement("li", null, React.createElement("div", {onClick: this.onNav.bind(this, "one")}, "Page One ")), 
          React.createElement("li", null, React.createElement("div", {onClick: this.onNav.bind(this, "two")}, "Page Two "))
        ), 
        React.createElement("div", null, showing)
      )    
      );
  }

});

views.FirstView = FirstView;

})(matt.views);