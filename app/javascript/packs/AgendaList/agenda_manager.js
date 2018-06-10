import React, { Component } from 'react';
import Checkbox from './checkbox_committee';
import DailyAgenda from './daily_agenda'

/*TODO:
` 1) create sample daily_agenda data. [{ daily_agenda: , events []}]
  2) filter out the daily agenda date by if the committe name is checked
  3) change the proptype to handle the committee info being an array
  4) in the event.js adjust the committee info to map an array
 */
const committee_info = [
  {
    committee_code: "C01",
    committee_name: "Committee One",
    count: 23
  },
  {
    committee_code: "C02",
    committee_name: "Committee Two",
    count: 67
  },
  {
    committee_code: "C03",
    committee_name: "Committee Three",
    count: 98
  }
];



class AgendaManager extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set(committee_info.map( item => item.committee_name ));
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = item => (
    <Checkbox
            id={item.committee_code}
            label={item.committee_name}
            handleCheckboxCommitteeChange={this.toggleCheckbox}
            key={item.committee_code}
        />
  )

  createCheckboxes = () => (
    committee_info.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
                <DailyAgenda />
          </div>
          <div className="col-12 col-md-3">
            <div className="location-title font-weight-bold">Filter By Committee</div>
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Filter</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default AgendaManager;
