import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const Button = (props) => {
  //  Write your code here.
  const {className,btn-text}=props;
  return(
      <button className={`button ${className}`}>{btn-text}</button>
  )
};

const element = (
  <div classNme="background-container">
    <div className="text-cont">
      <h1 className="heading">Social Buttons</h1>
      <div className="but-cont">
        <Button className="like-button" btn-text="Like" />
        <Button className="comment-button" btn-text="Comment" />
        <Button className="share-button" btn-text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
