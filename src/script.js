var App = React.createClass({
  
  getInitialState: function() {
    return {
      birthdayString: '1986-07-15',
      yearsToLive: 70
    }
  },
  
  componentWillUpdate: function() {
       
  },
  
  calcWeeks: function() {
    this.birthdate = moment(this.state.birthdayString);
    this.deathdate = this.birthdate.clone().add(this.state.yearsToLive, 'years');
    
    this.weeksTillDeath = this.deathdate.diff(this.birthdate, 'week')
    this.weeksUsed = moment().diff(this.birthdate, 'week')
    this.weeksLeft = this.deathdate.diff(moment(), 'week')
    console.log(    this.weeksTillDeath);
  },
  
  createWeeks: function() {    
    console.log('create')
    let weeks = []

    for (let i = 0; i < this.weeksTillDeath; i++) {     
      const weekStatus = i < this.weeksUsed ? 'week-used' : 'week-todo';
      
const classes = `${weekStatus} week`;

      weeks.push(<div className={classes}>
              #
            </div>)
    }
    return weeks
  },
  
  render: function() {
    this.calcWeeks();
    return (
     <div>
        <div>
          <label>
   Birthday:
<input type="text" value={this.state.birthdayString} onChange={ e => this.setState({ birthdayString : e.target.value }) } />
        </label><br />
                    <label>
   How old you want to be:
<input type="text" value={this.state.yearsToLive} onChange={ e => this.setState({ yearsToLive : e.target.value }) } />
        </label>
        </div>
        <p>You have {this.weeksLeft} weeks in your live.</p>
      <div className="weekboxes-wrapper">  
          {this.createWeeks()}
      </div>
        <p>You'll be dead around {this.deathdate.format('YYYY')}. You have {this.weeksUsed} weeks used and you have {this.weeksLeft} weeks left. Please spend them well.</p>
        </div>
    )
  }
});

React.render(<App birthdate="" deathdate="" />, document.querySelector("#root"));
