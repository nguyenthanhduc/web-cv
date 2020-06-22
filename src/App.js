import React from 'react';
import avatar from './image.jfif'
import './App.css';

function App() {
  return (
    <div className>
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img src={avatar}/>
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Nguyễn Thanh Đức</p>
                <p className="regular">Intern</p>
              </div>
              <ul>
                <li>
                  <div className="icon"><i class="fas fa-map-signs"></i></div>
                  <div className="data">
                    103 Lê Quyên, Phường 5, Quận 8 <br/> TPHCM
                  </div>
                </li>
                <li>
                  <div className="icon"><i class="fas fa-mobile-alt"></i></div>
                  <div className="data">
                    1234567890
                  </div>
                </li>
                <li>
                  <div className="icon"><i class="fas fa-envelope"></i></div>
                  <div className="data">
                    17521296@gm.uit.edu.vn
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">Skill's</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">
                    HTML
                  </div>
                  <div className="skill_progress">
                    <span style={{width: "80%"}}/>
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">
                    CSS
                  </div>
                  <div className="skill_progress">
                    <span style={{width: "60%"}}/>
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">
                    JS
                  </div>
                  <div className="skill_progress">
                    <span style={{width: "60%"}}/>
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">
                    ReactJS
                  </div>
                  <div className="skill_progress">
                    <span style={{width: "70%"}}/>
                  </div>
                  <div className="skill_per">70%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                  <i class="fab fa-facebook-square"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>Nguyễn Thanh Đức</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                  <i class="fab fa-twitter-square"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>nguyenthanhduc</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">Objective</p>
            </div>
            <p>
              I want to learn the steps of creating a software and want to learn the company's working culture.
              Furthermore, learning from those who preceded me was my most important goal during internship
            </p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Project Couses</p>
            </div>
            <ul>
              <li>
                <div className="date">2017 - 2018</div>
                <div className="info">
                  <p className="semi-bold">Chinese Chess</p>
                  <p>
                     App chess game can play with 2 player or player and computer. 
                     Player can use button "Undo" and "Save" ( limit is 5 ). 
                     And button "Draw" if anyone want to draw 
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2018 - 2019</div>
                <div className="info">
                  <p className="semi-bold">Library Management</p>
                  <p>
                    A software to help librarian can management book, 
                    customer ( create for new customer ) and when people returning book , 
                    librarian can know people who return late and charge an extra fee 
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2019 - Present</div>
                <div className="info">
                  <p className="semi-bold">E-commerce web</p>
                  <p>
                    Support Admin can CRUD product and order statistics every day
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">2014 - 2017</div>
                <div className="info">
                  <p className="semi-bold">Hung Vuong high school</p>
                  <p></p>
                </div>
              </li>
              <li>
                <div className="date">2017 - Present</div>
                <div className="info">
                  <p className="semi-bold">University of Information Technology</p>
                  <p>
                    Major : Information System
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_hobby">
            <div className="title">
              <p className="bold">Hobby</p>
            </div>
            <ul>
              <li><i class="fas fa-book"></i></li>
              <li><i class="fas fa-gamepad"></i></li>
              <li><i class="fas fa-music"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
