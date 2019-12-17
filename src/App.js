import React from 'react';
import './App.css';
import Package1 from './complex-package';
import DependencyTree from "./components/dependency-tree";
import ResolvedDependencies from "./components/resolved-dependencies";

const data = JSON.parse(JSON.stringify(Package1));



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showResolved: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showResolved: !state.showResolved
        }));
    }

    render() {
        const taskResults = this.state.showResolved ? <ResolvedDependencies dependencies={data.dependencies}/> :
            <DependencyTree name={"Dependency Tree"} version={"0.0.1"} dependencies={data.dependencies}/>;
        const buttonTitle =  this.state.showResolved ? "Show Regular Tree" : "Show Resolved Tree"
        return (
            <div className="App">
                <button onClick={this.handleClick}>
                    {buttonTitle}
                </button>
                {taskResults}
            </div>
        );
    }
}
