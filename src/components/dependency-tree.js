import React from 'react';
import LeafNode from "./leaf-node";


class DependencyTree extends React.Component {

    //TODO: Extract Heavy Resolve Function away from the Render method
    //Option 1: https://medium.com/@rossbulat/how-to-memoize-in-react-3d20cbcd2b6e
    //Option 2: https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853
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
export default DependencyTree;
