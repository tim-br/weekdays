// import some code
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday']

// Create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <Text>
        {Moment().format('ddd')}
      </Text>
      {this.days()}
    </View>

    //<DayItem day={DAYS[0]}/>

    //{[<DayItem day={DAYS[2]}/>, <DayItem day={DAYS[5]}/>]}

  },
  days: function(){
    days =  DAYS.map(function(day){
      // Called 7 times for each day of week
      return <DayItem day={day} />
    });
    return days;
    // days = [<DayItem day="Sunday" />, <DayItem> etc]
  }
});

// Style the React Component

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // flex-direction: "row" or "column",
    justifyContent: 'center', // moves stuff height wise
    alignItems: 'center' // moves stuff width wise
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('myWeekdays', function(){
  return Weekdays
});
