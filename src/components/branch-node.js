//NOT YET USED, this was just an example I was looking into
//TODO: Add Icon to expand or minimize the nested list under it
import React from 'react';

export default class BranchNode extends React.Component {
    render() {
        const lib = this.props.lib;
        return (
            <div>
                {`${lib[0]} ${lib[1]}`}
            </div>
        );
    }
}