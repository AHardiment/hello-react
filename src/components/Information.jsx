import icon1 from "./../images/icon1.png";
import icon2 from "./../images/icon2.png";
import icon3 from "./../images/icon3.png";
import icon4 from "./../images/icon4.png";

const Information = () => {
  return (
    <div className="info-text">
      <div className="tool-icon">
        <img src={icon1} alt="tool icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="play icon">
        <img src={icon2} alt="play icon" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="gear icon">
        <img src={icon3} alt="gear icon" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className="code icon">
        <img src={icon4} alt="code icon" />
        <h2>JSX</h2>
        <p>Statically typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
};

export default Information;
