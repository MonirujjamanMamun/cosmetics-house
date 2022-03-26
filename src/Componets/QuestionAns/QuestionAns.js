import React from 'react';
import './QuestionAns.css';

const QuestionAns = () => {
    return (
        <div className='question-ans-container'>
            <div  className='ans-section'>
                <h3>How React Work?</h3>
                <p>React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM, creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. If there is no change in the state then commit is not done although render has occurred. React works on heuristic search. In simple terms, a heuristic search is a technique which has some previous knowledge about the search. Two elements of different types will produce different trees.</p>
            </div>
            <div className='ans-section'>
                <h3>Difference between Props vs State:</h3>
                <ol>
                    <h4>Props</h4>
                    <li>Props (short for properties) are a Component's configuration</li>
                    <li>Props are used to pass data from one component to another.</li>
                    <li>To get data one component to another props is must</li>
                    <li>Props are plain JavaScript objects.</li>
                </ol>
                <ol>
                    <h4>State</h4>
                    <li>The state is a local data storage that is local to the component only and cannot be passed to other components.</li>
                    <li>The (this.setState) property is used to update the state values in the component.</li>
                    <li>State is optional.</li>
                    <li>State are plain JavaScript objects.</li>
                </ol>
            </div>
            <div className='ans-section'>
                <h3>How Use State work?</h3>
                <p>UseState is a hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial sate) and another.</p>

            </div>
        </div>
    );
};

export default QuestionAns;