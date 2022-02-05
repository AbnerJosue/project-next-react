import HomaPage from "../src/components/HomePage/HomaPage"
import { Grid } from "@mui/material"
import styled from "styled-components";

const WelcomeWords = styled.div`
font-size: 24px;
font-wheight: 700;
`;


export default function Login() {
    return (
        <div>
            <HomaPage />
            <Grid
                container
                direction="column"
                alignContent="center"
                justifyContent="center"
                style={{ minHeight: "90vh" }}
            >
                <Grid item xs={12} md={12}>
                    <WelcomeWords>
                        BIENVENIDOS A MI PAGINA WEB DE JOSUE ESTRADA
                    </WelcomeWords>
                </Grid>
            </Grid>
        </div>
    )
}