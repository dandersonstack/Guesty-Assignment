import React, {useState} from 'react';
import './App.css';
import ComplexPackage from './complex-package';
import DependencyTree from "./components/dependency-tree";
import ResolvedDependencies from "./components/resolved-dependencies";

const data = JSON.parse(JSON.stringify(ComplexPackage));

function App () {
    const [showResolved, toggleResolved] = useState(false);
    const toggle = () => toggleResolved(!showResolved);
    const taskResults = showResolved ? <ResolvedDependencies dependencies={data.dependencies}/> :
        <DependencyTree name={"Dependency Tree"} version={"0.0.1"} dependencies={data.dependencies}/>;
    const buttonTitle =  showResolved ? "Show Regular Tree" : "Show Resolved Tree";
    return (
        <div className="App">
            <button onClick={toggle}>
                {buttonTitle}
            </button>
            {taskResults}
        </div>
    );
}

export default App;