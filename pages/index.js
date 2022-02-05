import { useRouter } from "next/router";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import styled from "styled-components";

const TitleAppBar = styled.div`
text-align: center; 
font-size: 20px;
`;

export default function Home() {
  const router = useRouter();

  /* La funcion handleClick ejecutara un evento el cual retornara al la 
   vista de home  el router.push es el enrutamiento para redireccionar la pagina */
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/home/")
  }

  const handleClickSecondary = (e) => {
    e.preventDefault()
    router.push("/secondary-pages/")
  }

  /* 
    ya que estoy utilizando un framework de next js no hay 
    necesidad de declarar la rutas las ruta se declaran por si solas indicando el nombre dentro de la carpeta pages
    https://nextjs.org/docs/api-reference/next/router ----> documentacion de next js, next js siempre es react js 
  */

 
  /*
    para que el proyecto se ejecute tambien en modo desarrollo en necesario descarga redux tools 
    https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?utm_source=googleads&utm_medium=adgroup5&utm_campaign=adgroup5&utm_id=adgroup5&gclid=CjwKCAiAl-6PBhBCEiwAc2GOVPNdvsyu8bNEEI_XNBwN5_Lfl1BOwMkgGuRnGlLP18Qdb-SiH8SBAhoCQuQQAvD_BwE
    esto para evitar un problema
  */ 


  return (
    <div>
      <AppBar position='static' style={{ background: '#28282a' }}>
        <Toolbar>
          <Grid container direction={"column"} justifyContent="center" alignContent={"center"}>
            <Grid>
              <TitleAppBar> RUTAS DE PAGINA </TitleAppBar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container direction={"column"} justifyContent="center" alignContent={"center"} style={{ minHeight: '90vh' }}>
        <Grid item xs={12} md={12} >
          <Button
            variant="contained"
            style={{
              margin: '20px',
              background: 'white',
              border: '1px solid #28282a',
              color: '#28282a'
            }}
            onClick={handleClick}
          >
            PAGINA PRINCIPAL
          </Button>
          <Button
            variant="contained"
            style={{
              background: '#ff3366',
              color: '#FFF',
              border: '1px solid #ff3366'
            }}
            onClick={handleClickSecondary}
          >
            PAGINA SECUNDARIA
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
