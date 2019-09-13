import React, {Fragment} from 'react';

function List ({heroes}){
    return(
        <Fragment>
            <h1> Heroes Summary</h1>
            <ul>
                {heroes.map((heroe, index)=> {
                    return <li key={index}>{heroe.name}</li>
                })}
            </ul>
        </Fragment>
    )
}

export default List;