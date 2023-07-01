import React, {useRef} from 'react';
import useHover from "../../hooks/useHover.js";

const UseHover = () => {
    const ref = useRef();
    const isHovering = useHover(ref)

    console.log(isHovering)

    return (
        <div ref={ref} style={
            {
                width: 300,
                height: 300,
                background: isHovering
                    ? 'teal'
                    : 'black'
            }
        }>
        </div>
    );
};

export default UseHover;