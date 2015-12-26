// import some code
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// create component

var DayItem = React.createClass({
  render: function(){
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

// style our component

var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000ff'
  }
});

//make this code available

module.exports = DayItem;
