import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('Parts.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-y-10'>
            {tools.map(tool => <Tool key={tool.id} tool={tool}></Tool>)}
        </div>
    );
};

export default Tools;