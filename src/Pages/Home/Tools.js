import React from 'react';
import useTools from '../Shared/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools()

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-y-10'>
            {tools && tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)}
        </div>
    );
};

export default Tools;