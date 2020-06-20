import React, { Component } from 'react';
import OutputtingList from './Outputting_list';
import Forms from './Forms';

class App extends Component {
  state =  {
    persons: [
      {name:'Mythili', age:'21', nationality:'Indian',id:1},
      {name:'Karthi', age:'26', nationality:'Indian', id:2}
    ]
  }
  //Define a callback function that takes in a parameter which we consider having accessed from the child in the Parent
  addList = (person) => {
    console.log(person);
    person.id = Math.random();
    let persons = [...this.state.persons, person]
    this.setState({
      persons :  persons
    })
  }
  deleteList = (id) => {
     let persons = this.state.persons.filter( person => {
       return person.id !== id
     })
     this.setState({
         persons : persons
     })
  }
  render() {
    return (
      <div className="App">
        <h1 className="heading">Voter Id Details</h1>
        <OutputtingList deleteList={this.deleteList} persons={this.state.persons}/>
        {/* send the defined callback function as a props to the Child */}
        <Forms  addList={this.addList}/>
      </div>
    );
  }
}

export default App;