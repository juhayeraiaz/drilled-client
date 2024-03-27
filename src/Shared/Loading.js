import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center ">
            <PropagateLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;