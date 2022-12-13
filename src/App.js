import ReactDOM from "react-dom";
import "./App.css";

const Button = (props) => {
  const { className, children } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  <div className="bg-cont">
    <div className="main-cont">
      <h1 className="heading">Social Buttons</h1>
      <div className="btn-cont">
        <Button className="btn btn-like" children="Like" />
        <Button className="btn btn-comment" children="Comment" />
        <Button className="btn btn-share" children="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
export default Button;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App"> 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


