import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      formShow: false,
    };

    this.addItem = this.addItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItem(item) {
    this.setState({
      list: [...this.state.list, [...item]]
    });
  }

  handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data & add to state
    const name = e.target.name.value;
    const degree = e.target.degree.value;
    const all = [name, degree];
    this.addItem(all);

    // Clear form input
    e.target.reset();

    // Hide input form
    this.setState({ formShow: false })
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
                Name of university: <input name="name" />
              </label>
              <label>
                Degree/Qualification: <input name="degree" />
              </label>
                <button type="submit">Add to list</button>
              </form>
            </div>
          : null}

        <div className="educationList">
          {this.state.list.map((item, i) => 
          <div key={i} className="educationItem">
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </div>
          )}
        </div>

        <button onClick={() => this.setState({ formShow: !showing })}>+</button>

      </div>
    );
  }
}

export default Education;