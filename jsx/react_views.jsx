matt.views = {};

(function(views){



var PageOne = React.createClass({

  render: function(){
    return (<h1>Page One</h1>);
  }

});

var PageTwo = React.createClass({

  render: function(){
    return (<h1>Page Two</h1>);
  }

});

var FirstView = React.createClass({

  getView: function(show) {
    if (show === "one"){
      return <PageOne />
    }
    else if (show === "two"){
      return <PageTwo />
    }
  },

  onNav: function(show){
    this.props.onShow(show);
  },

  render: function(){
    var showing = this.getView(this.props.show);
    return (
      <div>
        <ul>
          <li><div onClick={this.onNav.bind(this, "one")}>Page One </div></li>
          <li><div onClick={this.onNav.bind(this, "two")}>Page Two </div></li>
        </ul>
        <div>{showing}</div>
      </div>    
      );
  }

});

views.FirstView = FirstView;

})(matt.views);