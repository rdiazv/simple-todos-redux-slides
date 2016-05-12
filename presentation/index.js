import React from "react";
import {
  Deck, Heading, Image, ListItem, List, Slide, Spectacle, CodePane, Appear
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  redux: require("../assets/logo-title-light.png"),
  flux: require("../assets/flux.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#000",
  text: "#fff"
});

const listTextSize = '3.5rem';
const codeTextSize = '2rem';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.redux.replace("/", "")} width="100%" />
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary">
            <Heading textColor="text" textFont="primary">
              Redux
            </Heading>
            <List textColor="text">
              <ListItem textSize={listTextSize}>Contenedor del estado de una aplicación JS</ListItem>
              <ListItem textSize={listTextSize}>Patrón para interacciones en la interfaz</ListItem>
              <ListItem textSize={listTextSize}>Permite desacoplar lógica de la vista</ListItem>
              <ListItem textSize={listTextSize}>Comportamiento consistente cross-platform</ListItem>
            </List>
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary">
            <Heading textColor="text" textFont="primary">
              Problemática
            </Heading>
            <List textColor="text">
              <ListItem textSize={listTextSize}>Se escribe y lee estado desde la interfaz gráfica</ListItem>
              <ListItem textSize={listTextSize}>Se escuchan cambios de estructuras aisladas</ListItem>
              <ListItem textSize={listTextSize}>Manejo de eventos globales</ListItem>
              <ListItem textSize={listTextSize}>Eventos en vistas anidadas</ListItem>
            </List>
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary">
            <Heading textColor="text" textFont="primary">
              Problemática
            </Heading>

            <CodePane
              lang="jsx"
              source={require("raw!../assets/code1.example")}
              margin="20px auto"
              textSize={codeTextSize}
            />

            <Appear fid="1">
              <CodePane
                lang="jsx"
                source={require("raw!../assets/code2.example")}
                margin="20px auto"
                textSize={codeTextSize}
              />
            </Appear>
            <Appear fid="2">
              <CodePane
                lang="jsx"
                source={require("raw!../assets/code3.example")}
                margin="20px auto"
                textSize={codeTextSize}
              />
            </Appear>
            <Appear fid="3">
              <CodePane
                lang="jsx"
                source={require("raw!../assets/code4.example")}
                margin="20px auto"
                textSize={codeTextSize}
              />
            </Appear>
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary">
            <Heading fit textColor="text" textFont="primary">
              Flujo de datos en un sentido
            </Heading>
            <List textColor="text">
              <ListItem textSize={listTextSize}>Basado de Flux</ListItem>
            </List>
            <Image src={images.flux.replace("/", "")} margin="0px 0px 40px 0px" width="100%" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps textColor="text" textFont="primary">
              Demo
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
