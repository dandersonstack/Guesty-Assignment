import React from 'react';
import LeafNode from "./leaf-node";

/**
 * A recursive flatten-tree method for dependency tree resolution.
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

//TODO: Extract Heavy Resolve Function away from the Render method
//Option 1: https://medium.com/@rossbulat/how-to-memoize-in-react-3d20cbcd2b6e
//Option 2: https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853
function ResolvedDependencies({dependencies}) {
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

//TODO: Add PropTypes + Default Props

export default ResolvedDependencies;
