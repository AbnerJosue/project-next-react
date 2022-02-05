import React, { useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Grid, Toolbar, Box, Paper } from "@mui/material";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../logic/actions/pokemons";
import * as selector from "../../logic/reducer";

const TitleAppBar = styled.div`
text-align: center; 
font-size: 20px;
`;

export const SecondaryPage = ({
    fetchingPokemons,
    completed,
    started,
}) => {

    useEffect(() => {
        fetchingPokemons()

    }, [fetchingPokemons,]);

    (completed?.results || []).map((poke, i) => {
        poke["id"] = i
    });

    const columns = [
        { field: 'name', headerName: 'Nombre', width: 150 },
        { field: 'url', headerName: 'URL DEL POKEMON', width: 150 },
    ];

    const [selectionModel, setSelectionModel] = React.useState([]);


    let select = [];
    if (completed !== null) {
        if (completed.results.length > 0) {
            select = completed.results.filter(e => e.id == selectionModel[0])
        }
    }

    console.log(select)


    return (
        <div>
            <AppBar position='static' style={{ background: '#28282a' }}>
                <Toolbar>
                    <Grid container direction={"column"} justifyContent="center" alignContent={"center"}>
                        <Grid>
                            <TitleAppBar> PAGINA SECUNDARIA</TitleAppBar>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div
                style={{
                    height: 400,
                    width: '95%',
                    padding: '20px 40px'
                }}
            >
                <DataGrid
                    columns={columns}
                    rows={completed?.results}
                    pagination
                    pageSize={10}
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                    }}
                    selectionModel={selectionModel}
                />
            </div>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        width: "100%",
                        height: "400px",
                    },
                }}
            >
                <Paper variant="outlined" style={{ background: '#F6F6F6' }} elevation={3}>
                    {
                        select.length > 0 && (
                            <div  style={{padding: '50px'}}>
                                <div style={{padding: '10px 0px'}}>
                                    NOMBRE:{" "+select[0].name}
                                </div>
                                <div>

                                </div>
                                <div>
                                    {select[0].url}
                                </div>
                            </div>
                        )
                    }
                </Paper>
            </Box>
        </div>
    )
};



export default connect(
    (state) => ({
        started: selector.getPokemons(state),
        completed: selector.pokemonsObtained(state),
    }),
    (dispatch) => ({
        fetchingPokemons() {
            dispatch(actions.fetchingPokemons())
        }
    })
)(SecondaryPage);
