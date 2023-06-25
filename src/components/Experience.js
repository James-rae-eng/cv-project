import React, { Component } from 'react';

class Experience extends Component {
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

  editItem(index, company, dates, role, description) {
    // Create a new array form the state, then modify the parts needed
    let newArray = this.state.list;
    newArray[index][0] = company;
    newArray[index][1] = dates;
    newArray[index][2] = role;
    newArray[index][3] = description;

    // Set state with new array
    this.setState({
      list: newArray
    });
  }

  handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data & add to state or go to edit if form in edit mode
    const company = e.target.company.value;
    const dates = e.target.dates.value;
    const role = e.target.role.value;
    const description = e.target.description.value;
    if (this.state.edit == null) {
      const all = [company, dates, role, description];
      this.addItem(all);
    } else {
      this.editItem(this.state.edit, company, dates, role, description);
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

        <h1>Experience</h1>
        { showing ?
            <div>
              <form method="post" onSubmit={this.handleSubmit}>
              <label>
                Name of company: <input name="company" defaultValue={this.state.edit !== null ? this.state.list[this.state.edit][0] : "" }/>
              </label>
              <label>
                Year (From - to): <input name="dates" defaultValue={this.state.edit !== null ? this.state.list[this.state.edit][1] : "" }/>
              </label>
              <label>
                Role: <input name="role" defaultValue={this.state.edit !== null ? this.state.list[this.state.edit][2] : "" }/>
              </label>
              <label>
                description: <input name="description" defaultValue={this.state.edit !== null ? this.state.list[this.state.edit][3] : "" }/>
              </label>
                <button type="submit">Add to list</button>
              </form>
            </div>
          : null
        }

        <div className="experienceList">
          {this.state.list.map((item, i) => 
            <div key={i} className="experienceItem">
              <p>{item[0]}</p>
              <p>{item[1]}</p>
              <p>{item[2]}</p>
              <p>{item[3]}</p>
              <button className="editExperience" onClick={() => this.handleEdit(i)}>Edit</button>
              <button className="deleteExperience" onClick={() => this.handleDelete(i)}>Delete</button>
            </div>)
          }
        </div>

        <button onClick={() => this.setState({ formShow: !showing })}>+</button>

      </div>
    );
  }
}

export default Experience;