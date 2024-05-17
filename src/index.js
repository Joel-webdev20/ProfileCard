import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="demo.jpg" alt="demoimage" />;
}

function Intro() {
  return (
    <div>
      <h1>Joel</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        necessitatibus exercitationem aliquam facere consectetur neque corporis
        perferendis voluptatem, porro impedit. Veritatis assumenda corporis modi
        ut error blanditiis consequuntur consequatur necessitatibus!
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/*       
      <Skill skill="React" emoji="💪" color="#123456" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="HTML + CSS" emoji="💪" color="yellow" />
      <Skill skill="Git and GitHub" emoji="💪" color="orange" /> */}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {(level === "beginner" && "👶") ||
          (level === "intermediate" && "👍") ||
          (level === "advanced" && "💪")}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
