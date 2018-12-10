/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import './style.css';


export const Wizard = ({ step: currentIndex, nextstepp, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props && nextstepp === true;


  const SubmitQhandler = () => {
    props.hanleUpdate();
    window.location = ('/dash');
  };

  return (

    <div className="Qcontainer">
      <nav className="Q-nav">
        {steps.map((step, index) => (
          <button
            key={step.props.title}
            onClick={() => { props.onChange(index); props.hanleUpdate(); }}
            className={getClsNavBtn(index === currentIndex)}
            title={step.props.description}
          >
            {step.props.title}
          </button>
        ))}
      </nav>
      {steps[currentIndex]}

      <div className="next-back-btns">
        <Button
          visible={prevStep}
          onClick={() => { props.onChange(currentIndex - 1); props.hanleUpdate(); }}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={nextStep}
          onClick={() => { props.onChange(currentIndex + 1); props.hanleUpdate(); }}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
      <span id="or">or</span>
      <button className="Q-submit" type="submit" onClick={SubmitQhandler}>Skip to next part.</button>
    </div>
  );
};

export const Step = ({ children }) => children;

function getClsNavBtn(active) {
  return `Q-nav-btn${active ? '-active' : ''}`;
}

function Button({ visible, ...props }) {
  return (
    <button className={visible ? 'back-btn' : 'invisible'} {...props} />
  );
}
