import "./about.css";
function About() {
  return (
    <div className="sep">
      <div className="sep"></div>
      <img src={"/images/kid.jpg"} alt="" />
      <div className="sep2">
        <h1 className="he">Changing our classrooms one click at a time</h1>
        <p>asdasdasdasd</p>
      </div>
      <div className="sep">
        <h1>Who We Are</h1>
        <p className="vlc">
          Founded in 2021 by Rithik and Devan, CESS allows students to connect
          with other students and engage in meaningful educational
          communication. Students can use virtual study groups, direct messages,
          and a virtual class forum to communicate about coursework, provide
          feedback on assignments, share information about materials and
          lessons, and request feedback from peers. Built by students, we
          understand modern learning problems firsthand…because we experience
          them. Join us on our mission to bridge the educational communication
          gap between the student body - one school at a time.
        </p>
      </div>
      <div className="sep">
        <h1>Our Mission</h1>
        <p className="vlc">
          Our mission is to bridge the communication gap through students
          helping students in a meaningful, educational environment - one school
          at a time.
        </p>
      </div>
      <div className="sep2">
        <h1 className="he">Our Story</h1>
        <p className="vl">
          Communication is a universal principle. It’s a necessity for anything
          to thrive. Relationships, workplaces, traffic, businesses - all rely
          on communication, and have tools to communicate. Why are our schools
          different? Why do children go home confused on their lesson? Why are
          children who missed a day because they were sick left uninformed? Even
          though its been proven that learning is done best through teaching,
          why is that concept still left out of our schools? These were the
          questions Devan and Rithik asked when they assessed the way schools
          operate for a project. They looked for answers, but could find none
          that really worked for modern students. So, they grouped together and
          got to work. Now, they’re students who have dedicated their lives to
          bridging the communication gap between the student body through CESS.
          We’re just getting started, and can’t wait to improve the learning
          environment for ALL students - one school at a time.
        </p>
      </div>
    </div>
  );
}
export default About;
