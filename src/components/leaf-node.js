import React from 'react';

function LeafNode({lib}) {
    return (
        <div>
            {`${lib[0]} ${lib[1]}`}
        </div>
    );
}

export default LeafNode;