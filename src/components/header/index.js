import {h, Component} from 'preact';
import {route} from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';
import {canciones as cancionesData} from '../../database';
import ReactGA from 'react-ga';

// import style from './style';

export default class Header extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cancionesMarkup: [],
      cancionesData: cancionesData,
      selectedRoute: this.props.selectedRoute
    };
    this.getSongsListMarkup = this.getSongsListMarkup.bind(this);
    this.getObrasPlasticasListMarkup = this.getObrasPlasticasListMarkup.bind(this);

    this.closeDrawer = this.closeDrawer.bind(this);
    this.linkTo = this.linkTo.bind(this);
    if (typeof window !== "undefined") {
      ReactGA.initialize('UA-134439002-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    // this.navigateToSong = this.navigateToSong.bind(this);
  }
  // componentDidMount() {
  //   console.log('state', this.state);
  //    this.setState({ cancionesMarkup: this.getSongsListMarkup()})
  // }
  componentWillReceiveProps(nextProps){
    this.setState({ selectedRoute: nextProps.selectedRoute})
  }
  closeDrawer() {
    this.drawer.MDComponent.open = false;
    // this.state = {};
  }

  openDrawer = () => (this.drawer.MDComponent.open = true);

  drawerRef = drawer => (this.drawer = drawer);
  // navigateToSong(e, cancion) {
  //    route(`/cancion/${this.state.cancionesData[cancion].slug}`);
  //    this.closeDrawer();
  //   let url = `/cancion/${this.state.cancionesData[this.state.selecteSong].slug}`;
  //   this.linkTo(url)
  // }
  linkTo = path => () => {
    route(path);
    this.closeDrawer();
  };
  // navigateToSong = this.linkTo(`/cancion/${this.state.cancionesData[this.state.selecteSong].slug}`);

  goHome = this.linkTo('/');
  goToMyProfile = this.linkTo('/ficha-tecnica');

  goToMaterialTEA = this.linkTo('/material-tea');
  //canciones
  goToCanciones = this.linkTo('/canciones');

  goToestrellita = this.linkTo('/cancion/estrellita');
  goTovalsecitoconmatesysol = this.linkTo('/cancion/valsecito-con-mates-y-sol');
  goTovidaladelperdon = this.linkTo('/cancion/vida-la-del-perdon');
  goTozambitademadre = this.linkTo('/cancion/zambita-de-madre');
  goTonegritamartina = this.linkTo('/cancion/negrita-martina');
  goTovalsdeabril = this.linkTo('/cancion/vals-de-abril');
  goTovidalita = this.linkTo('/cancion/vidalita');
  goTobagualadeldesierto = this.linkTo('/cancion/baguala-del-desierto');
  goTomalambopaldiferente = this.linkTo('/cancion/malambo-pal-diferente');
  goToriodelospajaros = this.linkTo('/cancion/rio-de-los-pajaros');
  goToguripescador = this.linkTo('/cancion/guri-pescador');
  goTomilongadelmate = this.linkTo('/cancion/milonga-del-mate');
  goTograciasalavida = this.linkTo('/cancion/gracias-a-la-vida');

  //obras plasticas
  goToObras = this.linkTo('/obras-plasticas');
  //fotos y videos
  goToFotosYVideos = this.linkTo('/fotos-y-videos');

  goToObraestrellita = this.linkTo('/obra-plastica/estrellita');
  goToObravalsecitoconmatesysol = this.linkTo('/obra-plastica/valsecito-con-mates-y-sol');
  goToObravidaladelperdon = this.linkTo('/obra-plastica/vida-la-del-perdon');
  goToObrazambitademadre = this.linkTo('/obra-plastica/zambita-de-madre');
  goToObranegritamartina = this.linkTo('/obra-plastica/negrita-martina');
  goToObravalsdeabril = this.linkTo('/obra-plastica/vals-de-abril');
  goToObravidalita = this.linkTo('/obra-plastica/vidalita');
  goToObrabagualadeldesierto = this.linkTo('/obra-plastica/baguala-del-desierto');
  goToObramalambopaldiferente = this.linkTo('/obra-plastica/malambo-pal-diferente');
  goToObrariodelospajaros = this.linkTo('/obra-plastica/rio-de-los-pajaros');
  goToObraguripescador = this.linkTo('/obra-plastica/guri-pescador');
  goToObramilongadelmate = this.linkTo('/obra-plastica/milonga-del-mate');
  goToObragraciasalavida = this.linkTo('/obra-plastica/gracias-a-la-vida');
  getSelected = (slug) => {
    let result = this.props.selectedRoute === slug || this.props.selectedRoute === `${slug}/`;

    return result
  }
  getTitle = () => { //the semantic key names of the database entries of the songs must be a reduced version of the route without whitespaces nor dashes, just all the letters alltogether
    let routeText = this.state.selectedRoute
    let cancionId = /[^/]*$/g.exec(routeText)[0].replace(/-/g, '');

    let cancionData = this.state.cancionesData[cancionId];
    let titleResult;

    if (cancionData) {
      titleResult = cancionData.title
    }
    else if (routeText === '/') {
    // else {
      titleResult = ' Clarisa Prince y '
    }
    else if (routeText === "/canciones" || routeText === "/canciones/") {
    // else {
      titleResult = ' Canciones'
    }
    else if (routeText === "/obras-plasticas" || routeText === "/obras-plasticas/") {
    // else {
      titleResult = 'Obras Plásticas'
    }
    else if (routeText === "/material-tea" || routeText === "/material-tea/") {
    // else {
      titleResult = 'Material TEA'
    }
    else if (routeText === "/fotos-y-videos" || routeText === "/fotos-y-videos/") {
    // else {
      titleResult = 'Fotos y Videos'
    }
    else if (routeText === "/ficha-tecnica" || routeText === "/ficha-tecnica/") {

      titleResult = 'Ficha Técnica'
    }
    else if (routeText === "/apoyan" || routeText === "/apoyan/") {

      titleResult = 'Sé un Colaborador'
    }
    return titleResult
  }

  render(props) {
    console.log(props.selectedRoute);
    return (<div>
      <TopAppBar style={{
          width: '100vw',
          padding: '0rem 3rem 0rem 1rem',
          backgroundColor: 'hsla(25, 45%, 23%, 0.53)',
          transition: 'width 2s'
        }} className="toolbar">
        <TopAppBar.Row>
          <TopAppBar.Section align-start="align-start">
            <TopAppBar.Icon menu="menu" style={{
                cursor: 'pointer'
              }} onClick={this.openDrawer}>
              flare
            </TopAppBar.Icon>

            <TopAppBar.Title style={{
                fontFamily: 'Sign Painter',
                fontSize: '1.5rem',
                margin: 'auto'
              }}>{this.getTitle()}</TopAppBar.Title>
          </TopAppBar.Section>
        </TopAppBar.Row>
      </TopAppBar>
      <Drawer modal="modal" ref={this.drawerRef}>
        <Drawer.DrawerContent style={{
            backgoundColor: 'hsl(24, 18%, 28%)',
            color: 'hsl(24, 18%, 88%)'
          }}>
          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={(props.selectedRoute === '/' || props.selectedRoute === '/no-encontrado')} onClick={this.goHome}>
            <List.ItemGraphic style={{
                color: 'hsl(24, 18%, 88%)'
              }}>home</List.ItemGraphic>
            Inicie
          </Drawer.DrawerItem>


          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={props.selectedRoute === '/canciones'} onClick={this.goToCanciones}>
            <h1 style={{
                marginLeft: '1rem'
              }}>Canciones</h1>
            <List.ItemGraphic>&nbsp; 🎶</List.ItemGraphic>
          </Drawer.DrawerItem>

          {/* Lista de Canciones */
            this.getSongsListMarkup()
          }
          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={props.selectedRoute === '/obras-plasticas'} onClick={this.goToObras}>
            <h1 style={{
                marginLeft: '1rem'
              }}>Obras plásticas</h1>
            <List.ItemGraphic>&nbsp; §</List.ItemGraphic>
          </Drawer.DrawerItem>
          {/* Lista de Canciones */
            this.getObrasPlasticasListMarkup()
          }
          <Drawer.DrawerItem style={{
            cursor: 'pointer'
          }} selected={this.getSelected('/fotos-y-videos')} onClick={this.goToFotosYVideos}>
          <h1 style={{
              marginLeft: '1rem'
            }}>Fotos y Videos</h1>
            <List.ItemGraphic>&nbsp; 🎶</List.ItemGraphic>
          </Drawer.DrawerItem>

          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={props.selectedRoute === '/material-tea'} onClick={this.goToMaterialTEA}>
            <h1 style={{
                marginLeft: '1rem'
              }}>Material TEA</h1>
            <List.ItemGraphic>&nbsp; §</List.ItemGraphic>
          </Drawer.DrawerItem>

          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={this.getSelected('/ficha-tecnica')} onClick={this.goToMyProfile}>
            <List.ItemGraphic>account_circle</List.ItemGraphic>
            Ficha Técnica
          </Drawer.DrawerItem>
        </Drawer.DrawerContent>
      </Drawer>
    </div>);
  }
  
  getSongsListMarkup() {
    // debugger
    let cancionesList = []
    for (var cancion in this.state.cancionesData) {
      if (this.state.cancionesData.hasOwnProperty(cancion)) {
        cancionesList.push(<Drawer.DrawerItem style={{
            cursor: 'pointer'
          }} selected={this.props.selectedRoute === `/cancion/${this.state.cancionesData[cancion].slug}`} onClick={this[`goTo${cancion}`]}>
          {this.state.cancionesData[cancion].title}
        </Drawer.DrawerItem>)
      }
    }
    // this.setState({cancionesMarkup: cancionesList});
    return cancionesList;
  }
  getObrasPlasticasListMarkup() {
    // debugger
    let cancionesList = []
    for (var cancion in this.state.cancionesData) {
      if (this.state.cancionesData.hasOwnProperty(cancion)) {
        cancionesList.push(<Drawer.DrawerItem style={{
            cursor: 'pointer'
          }} selected={this.props.selectedRoute === `/obra-plastica/${this.state.cancionesData[cancion].slug}`} onClick={this[`goToObra${cancion}`]}>
          {this.state.cancionesData[cancion].title}
        </Drawer.DrawerItem>)
      }
    }
    // this.setState({cancionesMarkup: cancionesList});
    return cancionesList;
  }
}
