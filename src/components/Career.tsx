import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>NotX Development</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              I’m always exploring new technologies and improving my skills. 
              I enjoy building projects, solving challenging problems, 
              and creating experiences that are both functional and visually engaging.”
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Designer</h4>
                <h5>Beautify</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              I’m always exploring new technologies and improving my skills. 
              I enjoy building projects, solving challenging problems, 
              and creating experiences that are both functional and visually engaging.”
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>FlipBet</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I’m always exploring new technologies and improving my skills. 
              I enjoy building projects, solving challenging problems, 
              and creating experiences that are both functional and visually engaging.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
