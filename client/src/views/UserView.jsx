var React = require('react');

var Router = require('react-router');
var Navigation = Router.Navigation;
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var Link = Router.Link;

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    Paper = mui.Paper;


var UserView = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState: function(){
    return {
      // user: 'nobody'
    };
  },
  render: function() {
    // console.log('Props in userview render', this.props);
    var user = this.props.user;
    // google.username
    // score
    // if (user.google[name]) {
    //   var username = user.google.name;
    // } else {
    //   var username = null;
    // }
    var paper = (
    <Paper zDepth={1}>
      <p>zDepth=1</p>
    </Paper>
    )
    if (user.hasOwnProperty('google')) {
      console.log(user);
      var google = user.google;
      console.log('google', google);
      profileImage = user.google.profileImage;
      username = user.google.name;
      userlocation = user.google.location;
      return (<div className="container"> 
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-md-2">
            <img src={profileImage} className="img-responsive img-circle img-thumbnail profileImage"></img>
          </div>
          <div className="col-xs-12 col-sm-9 col-md-10">
            <h1>{username}</h1>
            <p>{userlocation}</p>
            {user.score}
            {user.stats}
          </div>
        </div>
        <Paper zDepth={1} circle={true}>
        </Paper>
      </div>);
    } else {
      return (<div className="container"> <div className="row"><p>You are not logged in.</p></div></div>)
    }
  }
})

module.exports = UserView;