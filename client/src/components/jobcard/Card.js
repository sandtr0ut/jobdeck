import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import CardBtn from './CardButton';
import BackgroundImg from './demo-resources/imgs/nastuhabootalebiyWwob8kwOCkunsplash.jpg';
import LogoImg from './demo-resources/imgs/logo.png';

const Card = ({ profile: { jobpost } }) => {
  return (
    <Fragment>
      {jobpost.map((job, index) => (
        <div key={job.id} className="container">
          <div className="lead">
            <div className="card">
              <div className="jobcard bg-light">
                <div className="jobcard-img">
                  <img src={BackgroundImg} alt="" />
                </div>
                <div className="jobcard-content">
                  <div className="logo">
                    {' '}
                    <img
                      className="jobcard-logo round-img"
                      src={LogoImg}
                      alt=""
                    />
                  </div>
                  {/* <Logo /> */}
                  <h2 className="ml-2">{job.jobTitle}</h2>
                  <h3 className="ml-2">{job.companyName}</h3>
                  <h3 className="ml-2">{job.salary}</h3>
                  <p className="my-1 ml-2">
                    <span>{job.workLocation}</span>
                  </p>
                </div>
                <div>
                  {/* <a class="btn btn-primary" type="checkbox" onclick="expand()">View Profile</a> */}
                  <input
                    id={'toggle' + index}
                    className="toggle btn-primary"
                    type="checkbox"
                  />
                  <label htmlFor={'toggle' + index} className="btn btn-primary">
                    <i className="fas fa-arrow-circle-down fa-4x" />
                  </label>

                  <input
                    id={'toggleheart' + index}
                    className="toggle toggleheart btn-light"
                    type="checkbox"
                  />
                  <label
                    htmlFor={'toggleheart' + index}
                    className="btn heartbtn btn-light"
                  >
                    <i className="far fa-heart fa-4x" />
                  </label>
                  <input
                    id={'toggleX' + index}
                    className="toggle toggleX btn-primary"
                    type="checkbox"
                  />
                  <label
                    htmlFor={'toggleX' + index}
                    className="btn Xbtn btn-primary"
                  >
                    <i className="fas fa-times-circle fa-4x" />
                  </label>

                  <div className="expand">
                    <section>
                      <h2>Title: {job.jobTitle}</h2>
                      <h3>Type: {job.jobType}</h3>
                      <h3>Job Description:</h3>
                      <p>{job.jobDescription}</p>
                      <h3>Desired Experience:</h3>
                      <p>{job.desiredExperience}</p>
                      <h3>Key Skills: {job.keySkills}</h3>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

Card.propTypes = {
  profile: PropTypes.object.isRequired,
  jobpost: PropTypes.array.isRequired
};

export default Card;

// return(

//     <div className="container" >
//         <div className="lead">
//             <div className="card">
//                 <div className="jobcard bg-light">
//                     <div className="jobcard-img">
//                         <img src={props.BackgroundImg} alt />
//                     </div>
//                     <div className="jobcard-content">
//                         <div className="logo"> <img className="jobcard-logo round-img" src={LogoImg} alt /></div>
//                         {/* <Logo /> */}
//                         <h2>Sr. Software Engineer</h2>
//                         <h3>Elevated Acoustics</h3>
//                         <h3>$125k</h3>
//                         <p className="my-1"><span>Phoenix, AZ</span></p>
//                     </div>
//                     <div>
//                     {/* <a class="btn btn-primary" type="checkbox" onclick="expand()">View Profile</a> */}
//                     <input id="toggle" className="toggle btn-primary" type="checkbox" />
//                     <label htmlFor="toggle" className="btn btn-primary">
//                         <i className="fas fa-arrow-circle-down fa-4x" />
//                     </label>

//                     <input id="toggleheart" className="toggle toggleheart btn-primary" type="checkbox" />
//                     <label htmlFor="toggleheart" className="btn heartbtn btn-primary">
//                         <i className="far fa-heart fa-4x"></i>
//                     </label>
//                     <input id="toggleX" className="toggle toggleX btn-primary" type="checkbox" />
//                     <label htmlFor="toggleX" className="btn Xbtn btn-primary">
//                         <i className="fas fa-times-circle fa-4x"></i>
//                     </label>

//                 <div className="expand">
//                     <section>
//                         <h2>Example Job</h2>
//                         <h3>Summary</h3>
//                         <p>
//                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nam voluptates
//                             architecto. Obcaecati delectus, libero voluptatum omnis ex labore nisi culpa,
//                             quisquam dolor excepturi suscipit autem temporibus ab itaque aliquam! Lorem ipsum
//                             dolor sit amet consectetur adipisicing elit. Quia dolor fugit adipisci nihil
//                             assumenda veritatis earum ea, tempora maxime nobis, obcaecati, vel hic sapiente! Vel
//                             labore fuga suscipit ullam voluptates.
//                              </p>
//                     </section>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     </div >)
// }
