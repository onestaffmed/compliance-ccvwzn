import React from "react";
import { Link } from 'react-router-dom';




const License = ({ licenses: { type, state, compact, expiration } }) => {

    return (
        <>
            {/* <Link to={`/license/${id}-${type}`}> */}
            <div >
                <h3 >State: {state}</h3>
                <p >Type of License: {type}</p>
                <p>Is Compact? {compact}</p>
                <p>Expires: {expiration}</p>
            </div>
            {/* </Link> */}

        </>
    )

};


export default License;