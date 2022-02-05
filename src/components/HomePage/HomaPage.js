import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {AppBar, Grid, Toolbar} from "@mui/material";
import styled from "styled-components";

const TitleAppBar = styled.div`
text-align: center; 
font-size: 20px;
`;

export const HomaPage = (props) => {
    return (
        <Fragment>
            <AppBar position='static' style={{background: '#28282a'}}>
                <Toolbar>
                    <Grid container direction={"column"} justifyContent="center" alignContent={"center"}>
                        <Grid>
                            <TitleAppBar> BIENVENDIDOS A MI PAGINA WEB </TitleAppBar>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
};




export default HomaPage;
