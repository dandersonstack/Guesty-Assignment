import React from 'react';

export default class LeafNode extends React.Component {
    render() {
        const lib = this.props.lib;
        return (
            <div>
                {`${lib[0]} ${lib[1]}`}
            </div>
        );
    }
}