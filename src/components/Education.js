import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      formShow: false,
      edit: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItem(item) {
    this.setState({
      list: [...this.state.list, [...item]]
    });
  }

  editItem(index, name, degree) {
    // Create a new array form the state, then modify the parts needed
    let newArray = this.state.list;
    newArray[index][0] = name;
    newArray[index][1] = degree;

    // Set state with new array
    this.setState({
      list: newArray
    });
  }

  handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data & add to state or go to edit if form in edit mode
    const name = e.target.name.value;
    const degree = e.target.degree.value;
    if (this.state.edit == null) {
      const all = [name, degree];
      this.addItem(all);
    } else {
      this.editItem(this.state.edit, name, degree);
    }

    // Clear form input
    e.target.reset();

    // Hide input form & reset edit state
    this.setState({formShow: false})
    this.setState({edit: null});
  }

  handleEdit(index) {
    // Fill form with details from state
    this.setState({edit: index});

    // Show form
    this.setState({formShow: true});
  }

  handleDelete(index) {
    // Create new array and delete item specified
    let newArray = this.state.list;
    newArray.splice(index, 1);

    // Set state with new updated array
    this.setState({
      list: newArray
    });
  }
 
  render() {
    const showing = this.state.formShow;

    return (
      <div>

        <h1>Education</h1>
        { showing ?
            <div>
              <form method="post" onSubmit={this.handleSubmit}>
              <label>
                Name of university: <input name="name" defaultValue={this.state.edit !== null ? this.state.list[this.state.edit][0] : "" }/>
              </label>
              <label>
                Degree/Qualification: <input name="degree" defaultValue={this.state.edit !== null ? this.state.list[this.state.edit][1] : "" }/>
              </label>
                <button type="submit">Add to list</button>
              </form>
            </div>
          : null
        }

        <div className="educationList">
          {this.state.list.map((item, i) => 
            <div key={i} className="educationItem">
              <p>{item[0]}</p>
              <p>{item[1]}</p>
              <button className="editEducation" onClick={() => this.handleEdit(i)}>Edit</button>
              <button className="deleteEducation" onClick={() => this.handleDelete(i)}>Delete</button>
            </div>)
          }
        </div>

        <button onClick={() => this.setState({ formShow: !showing })}>+</button>

      </div>
    );
  }
}

export default Education;