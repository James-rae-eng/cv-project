import React, { useState } from "react";

const Experience = () => {
  const [list, setList] = useState([]);
  const [formShow, setFormshow] = useState(false);
  const [edit, setEdit] = useState(null);

  const addItem = (item) => {
    setList([...list, [...item]]);
  };

  const editItem = (index, company, dates, role, description) => {
    // Create a new array form the state, then modify the parts needed
    let newArray = list;
    newArray[index][0] = company;
    newArray[index][1] = dates;
    newArray[index][2] = role;
    newArray[index][3] = description;

    // Set state with new array
    setList(newArray);
  }

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data & add to state or go to edit if form in edit mode
    const company = e.target.company.value;
    const dates = e.target.dates.value;
    const role = e.target.role.value;
    const description = e.target.description.value;
    if (edit == null) {
      const all = [company, dates, role, description];
      addItem(all);
    } else {
      editItem(edit, company, dates, role, description);
    }

    // Clear form input
    e.target.reset();

    // Hide input form & reset edit state
    setFormshow(false);
    setEdit(null);
  }

  const handleEdit = (index) => {
    // Fill form with details from state
    setEdit(index);

    // Show form
    setFormshow(true);
  }

  const handleDelete = (index) => {
    // Create new array and delete item specified
    let newArray = list;
    newArray.splice(index, 1);

    // Set state with new updated array
    setList(newArray);
  }

  return (
    <div className="experience">
      <h1>Experience</h1>
      { formShow ?
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <div className="topExp">
                <label>
                  Name of company: <input name="company" defaultValue={edit !== null ? list[edit][0] : "" }/>
                </label>
                <label>
                  Year (From - to): <input name="dates" defaultValue={edit !== null ? list[edit][1] : "" }/>
                </label>
              </div>
              <label>
                Role: <input name="role" defaultValue={edit !== null ? list[edit][2] : "" }/>
              </label>
              <label>
                Description: <input name="description" defaultValue={edit !== null ? list[edit][3] : "" }/>
              </label>
              <button type="submit">Add to list</button>
            </form>
          </div>
        : null
      }
      <div className="experienceList">
        {list.map((item, i) => 
          <div key={i} className="experienceItem">
            <div className="topExp">
              <p>{item[0]}</p>
              <p>{item[1]}</p>
            </div>
            <p>{item[2]}</p>
            <p>{item[3]}</p>
            <button className="editExperience" onClick={() => handleEdit(i)}>Edit</button>
            <button className="deleteExperience" onClick={() => handleDelete(i)}>Delete</button>
          </div>)
        }
      </div>
      <button className="addExp" onClick={() => setFormshow(!formShow)}>+</button>
    </div>
  );
}

export default Experience;