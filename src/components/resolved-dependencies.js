import React, {useMemo} from 'react';
import LeafNode from "./leaf-node";

/**
 * A recursive flatten-tree method for dependency tree resolution.
 * dependencyTree: A Json Tree of dependencies
 * @Return: An object of resolved dependencies with their version
 * ex. {libraryName: [versionNumber, level]}
 * */
function resolveDependencies(dependencyTree, seen = {}, level= 0) {
    Object.entries(dependencyTree).forEach(([key, value], index) => {
        if(typeof value === 'string') {
            if(!seen[key] || seen[key][1] > level) {
                seen[key] = [value, level];
            }
        } else {
            resolveDependencies(value.dependencies, seen, level + 1);
        }
    });
    return seen;
}

function ResolvedDependencies({dependencies}) {
    const resolvedDependencies = useMemo(() => resolveDependencies(dependencies), [dependencies]);
    let result = [];
    Object.entries(resolvedDependencies).forEach(([key, value], index) => {
        result.push(<LeafNode lib={[key,value[0]]} key={index}/>);
    });
    return (
        <div>
            {result}
        </div>

    );
}

export default ResolvedDependencies;
