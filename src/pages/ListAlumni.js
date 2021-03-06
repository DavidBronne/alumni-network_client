import React, { Component } from 'react';
import userService from '../lib/user-service';
import { withAuth } from '../lib/AuthProvider';

import Searchbar from '../components/Searchbar';
import SearchFilters from '../components/SearchFilters';
// import Navbar from '../components/Navbar';
import AlumniCard from '../components/AlumniCard';
import BottomNav from '../components/BottomNav';


class ListAlumni extends Component {
  state = {
    listOfAlumni: [],
    alumniFiltered: [],
  }

  componentDidMount() {
    userService.getAll()
      .then((allUsers)=>{
        this.setState({ listOfAlumni: allUsers, alumniFiltered: allUsers })
      })
      .catch((err) => console.log(err));
  }

  filterAlumni = searchTerm => {
		// console.log('search term', searchTerm);
		// apply lower case to the search term
		const lowerSearchTerm = searchTerm.toLowerCase();
		
		const filteredAlumni = this.state.listOfAlumni.filter( alumni => {
				// apply lower case to the alumni name
        const alumniFirstName = alumni.firstName.toLowerCase();
        const alumniLastName = alumni.lastName.toLowerCase();
        const alumniCompany = alumni.currentCompany.toLowerCase();
        const alumniRole = alumni.currentRole.toLowerCase();
				// filter only the alumni that include the search term in their name, role or company
				return (alumniFirstName.includes(lowerSearchTerm) || alumniLastName.includes(lowerSearchTerm) || alumniCompany.includes(lowerSearchTerm) || alumniRole.includes(lowerSearchTerm));
		})
		this.setState({ alumniFiltered: filteredAlumni })
  }
  
  multiFilter = (name, value) => {
    let filteredAlumni = [];
    if(name === 'bootcamp') {
      if (value === 'all') {
        filteredAlumni = this.state.listOfAlumni;
      } else {
        filteredAlumni = this.state.listOfAlumni.filter( alumni => {
          return (alumni.bootcamp === value)
        })
      }
    } else if (name === 'city') {
      if (value === 'all') {
        filteredAlumni = this.state.listOfAlumni;
      } else {
        filteredAlumni = this.state.listOfAlumni.filter( alumni => {
          return (alumni.campus === value)
        })
      }
    } else if (name === 'cohort') {
      if (value === 'all') {
        filteredAlumni = this.state.listOfAlumni;
      } else {
        filteredAlumni = this.state.listOfAlumni.filter( alumni => {
          return (alumni.cohort === value)
        })
      }
    }
    this.setState({ alumniFiltered: filteredAlumni })
  }

  render() {
    // console.log(this.state.listOfAlumni);    
    return (
      <div className="container">
        <section className="section">
          <div className="top-search-nav navbar is-fixed-top">
            <Searchbar filterByTerm={this.filterAlumni} />
            <SearchFilters filterByProperty={this.multiFilter} />
            {/* <Navbar /> */}
          </div>

          <div className="results-list">
            <h3 className="title is-3">Alumni</h3>

            {
              this.state.alumniFiltered.map( (oneAlumni, index) => {
                return <AlumniCard key={index} {...oneAlumni} /> 
              })
            }
          </div>

          <BottomNav />
        </section>
      </div>
    );
  }
}

export default withAuth(ListAlumni);
