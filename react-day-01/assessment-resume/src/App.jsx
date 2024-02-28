import myPic from "./assets/img-bashah.jpg";

function App() {
  return (
    <main>
      <div className="myInfo">
        <figure>
          <img src={myPic} alt="Image of Aqif Bashah" />
        </figure>
        <div>
          <h1>Muhammad Aqif Bashah bin Mohd Zalfa</h1>
          <h2>Bsc Physics with Electronics with Honours</h2>
        </div>
      </div>
      <div className="container">
        <h2>Education</h2>
        <p>
          Bsc Physics with Electronics with Honours -
          <a href="https://www.ums.edu.my/v5/">Universiti Malaysia Sabah</a>
        </p>
        <p>Foundation in Science - Universiti Malaysia Sabah</p>
        <p>
          SPM -
          <a href="https://www.facebook.com/sdarseremban/">
            Sekolah Dato Abdul Razak
          </a>
        </p>
      </div>
      <div className="container">
        <h2>Certificate</h2>
        <p>
          <a href="https://www.fusionexgroup.com/">Fusionex</a> Data Scientist
          Analyst Program
        </p>
      </div>
      <div className="container experience">
        <h2>Professional Experience</h2>
        <div>
          <div className="row">
            <div className="column1">
              <h4>Oct 2022 - Aug 2023</h4>
              <h4>Banting, Selangor</h4>
            </div>
            <div className="column2">
              <h3>Project Admin - Pipelines</h3>
              <h4>Cariming-iDrill Joint Venture</h4>
              <ul>
                <li>
                  Organized and executed events of varying sizes, managing
                  budgets, logistics, vendors, timelines and delivering
                  exceptional attendee experiences.
                </li>
                <li>
                  Expertly maintain company vehicle for optimal performance and
                  proactively address maintenance needs
                </li>
                <li>
                  Manage and reconcile petty cash, maintain records, prepare
                  reports and ensure compliance with finanancial policies and
                  procedures
                </li>
                <li>
                  Prepare daily progress reports, highlighting achievements,
                  challenges and areas needing attention
                </li>
                <li>
                  Create monthly progress videos, showcasing accomplishments and
                  objectives achieved within set timeline
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="column1">
              <h4>September - October 2022</h4>
              <h4>Kuala Lumpur</h4>
            </div>
            <div className="column2">
              <h3>Telemarketing Executive - Fundraising</h3>
              <h4>Omniraise Sdn Bhd</h4>
              <ul>
                <li>
                  Initiate donor outreach calls to educate on urgent client
                  matters and raise awareness for cause
                </li>
                <li>
                  Attend meetings to learn about new projects and services our
                  client provides
                </li>
                <li>
                  Represent important Non-Government Organization to spread
                  awareness about their programs
                </li>
                <li>
                  Completed accurate donors registration form and submit daily
                  for processing by the fundraising operations executive
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="column1">
              <h4>March - September 2021</h4>
              <h4>Kota Kinabalu, Sabah</h4>
            </div>
            <div className="column2">
              <h3>Research Assistant</h3>
              <h4>Computational Material Lab, UMS</h4>
              <ul>
                <li>
                  Designed and developed an automated sanitizing machine using
                  3D Builder technology
                </li>
                <li>
                  Identified and sourced necessary materials and products for
                  the project, demonstrating strong research and procurement
                  skills
                </li>
                <li>
                  Expertly installed and maintained laboratory equipment,
                  including computers and air-conditioning units
                </li>
                <li>
                  Started conducting research on enhancing the performance of
                  natural dye-sensitized solar cells (n-DSSCs), showcasing a
                  passion for advancing scientific knowledge
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="column1">
              <h4>February - October 2020</h4>
              <h4>Senai, Johor</h4>
            </div>
            <div className="column2">
              <h3>Intern - Web Developer</h3>
              <h4>Seagate International Johor Sdn Bhd</h4>
              <ul>
                <li>
                  Possess 8 months of professional experience working with .NET,
                  C#, and HTML5
                </li>
                <li>
                  Demonstrated problem-solving skills by reverse-engineering an
                  outdated user interface and identifying all relevant fields,
                  ultimately producing a set of UI templates
                </li>
                <li>
                  Successfully developed a new, modern user interface for the
                  department using HTML5, CSS, jQuery (including Ajax call and
                  DataTable), and Chart JS
                </li>
                <li>
                  Created sample UI models for a new application to ensure a
                  streamlined and user-friendly experience for users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
