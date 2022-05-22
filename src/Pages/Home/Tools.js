import React, { useEffect, useState } from 'react';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('Parts.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            {tools.length}
        </div>
    );
};

export default Tools;