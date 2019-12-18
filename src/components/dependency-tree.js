import React, {useMemo} from 'react';
import LeafNode from "./leaf-node";

/**
* A recursive pre-order creation method to generated the tree.
* dependencies: A json object as seen in package.json
* @Return: An array of React Components
* */
function calculatedNestedTree(dependencies) {
    let nestedTree = [];
    Object.entries(dependencies).forEach(([key, value], index) => {
        if(typeof value === 'string') {
            nestedTree.push(<LeafNode lib={[key,value]} key={index}/>);
        } else {
            nestedTree.push(<DependencyTree name={value.name} version={value.version} dependencies={value.dependencies} key={index}/>)
        }
    });
    return nestedTree;
}

function DependencyTree ({dependencies, name, version}) {
    const nestedTree = useMemo(() => calculatedNestedTree(dependencies), [dependencies]);
    let currNode = [];
    if(name && version) {
        currNode.push(<LeafNode lib={[name,version]} key={0}/>);
    }
    return (
        <div>
            {currNode || <div/>}
            <div style={{"paddingLeft": "20px"}}>
                {nestedTree}
            </div>
        </div>

    );
}

export default DependencyTree; //note: always have defaults at the END of each file.
