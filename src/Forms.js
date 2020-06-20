import React, {Component} from 'react';

class Forms extends Component{
    state = {
        name: null,
        age: null,
        nationality:null
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //send the data using this.props.callback(dataToParent)
        this.props.addList(this.state);
        //To make the input field empty after we click on the submit button
        this.setState({
            name: '',
            age: '',
            nationality:''
        })
    }
    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
              <label htmlFor="age">Age</label>
              <input type="text" id="age" onChange={this.handleChange} value={this.state.age}/>
              <label htmlFor="nationality">Nationality</label>
              <input type="text" id="nationality" onChange={this.handleChange} value={this.state.nationality}/>
              <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default Forms