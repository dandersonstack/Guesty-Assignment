import React from 'react';
import LeafNode from "./leaf-node";

/**
 * dependencyTree: A Json Tree of dependencies
 * @Return: An object of resolved dependencies with their version
 * ex. {libraryName: [versionNumber, level]}
 * */
function resolve(dependencyTree, seen = {}, level= 0) {
    Object.entries(dependencyTree).forEach(([key, value], index) => {
        if(typeof value === 'string') {
            if(!seen[key] || seen[key][1] > level) {
                seen[key] = [value, level];
            }
        } else {
            resolve(value.dependencies, seen, level + 1);
        }
    });
    return seen;
}

export default class ResolvedDependencies extends React.Component {
    render() {
        const dependencies = this.props.dependencies;
        const resolvedDependencies = resolve(dependencies);
        let result = [];
        Object.entries(resolvedDependencies).forEach(([key, value], index) => {
            console.log(key, value);
            result.push(<LeafNode lib={[key,value[0]]} key={index}/>);
        });
        return (
            <div>
                {result}
            </div>

        );
    }
}

