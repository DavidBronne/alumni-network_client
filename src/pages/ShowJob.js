import React, { Component } from 'react';
import authService from '../lib/auth-service';
import jobService from '../lib/job-service';
import { Link } from 'react-router-dom';


class ShowJob extends Component {
  constructor(props){
    super(props);

    this.state = {
      job: {},
      isAdmin: false
    };		
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('JOB ID', id);

    jobService.getOne(id)
      .then((job)=>{
        this.setState({ job })
      })
      .catch((err) => console.log(err));
    
    authService.me()
    .then((currentUser)=>{
      // if user is admin
      if(currentUser.isAdmin) {
        this.setState({ isAdmin: true })
      }
    })
    .catch((err) => console.log(err));
  }


  render() {
    console.log('JOOOOB', this.state.job);
    return (
      <div>
        <h2>{this.state.job.title}</h2>
        <h3>{this.state.job.companyName}</h3>
        <div>
          <p>Location: {this.state.job.city}</p>
          <p>Date of publication</p>
          <p>Recommended for: {this.state.job.bootcamp}</p>
          <p>Description: {this.state.job.description}</p>
        </div>
        <div>
          <a href={this.state.job.jobOfferUrl} target="_blank">Apply to job offer</a>
        </div>
        {
          // if user is admin, display 'Edit' and 'Delete' button
          this.state.isAdmin
          ? 
            <div>
              <Link to={`/job/edit/${this.state.job._id}`}>
                <button>Edit job</button>
              </Link>
              <Link to={`/job/delete/${this.state.job._id}`}>
                <button>Delete job</button>
              </Link>
            </div>
          : null
        }
      
        { 
          <button onClick={ () => this.props.history.goBack()}>Go back</button>
        }
      </div>
    )
  }
}

export default ShowJob;