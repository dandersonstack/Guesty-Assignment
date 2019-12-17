import React from 'react';
import LeafNode from "./leaf-node";

export default class DependencyTree extends React.Component {
    render() {
        const dependencies = this.props.dependencies;
        let nestedTree = [];
        let currNode = [];
        if(this.props.name && this.props.version) {
            currNode.push(<LeafNode lib={[this.props.name,this.props.version]} key={0}/>);
        }

        Object.entries(dependencies).forEach(([key, value], index) => {
            if(typeof value === 'string') {
                nestedTree.push(<LeafNode lib={[key,value]} key={index}/>);
            } else {
                nestedTree.push(<DependencyTree name={value.name} version={value.version} dependencies={value.dependencies} key={index}/>)
            }
        });

        return (
            <div>
                {currNode}
                <div style={{"paddingLeft": "20px"}}>
                    {nestedTree}
                </div>
            </div>

        );
    }
}

