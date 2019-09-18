import React, {Fragment} from 'react';
import HeroeCards from './HeroeCards';
import {Grid} from '@material-ui/core';

function List ({heroes}){
    return(
        <Fragment>
            <Grid container spacing = {16} justify="center">
                {heroes.map((heroe, index)=> {
                    console.log(heroe);
                    return <HeroeCards name={heroe.name} images={heroe.images.sm} rname={heroe.biography.fullName} pbirth={heroe.biography.placeOfBirth}/>
                })}
            </Grid>         
        </Fragment>
    )
}

export default List;