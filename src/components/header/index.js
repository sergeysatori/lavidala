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
// import style from './style';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cancionesMarkup: [],
      cancionesData: cancionesData,
    };
    this.getSongsListMarkup = this.getSongsListMarkup.bind(this);
    this.getIsSelectedSong = this.getIsSelectedSong.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.linkTo = this.linkTo.bind(this);
    // this.navigateToSong = this.navigateToSong.bind(this);
  }
  // componentDidMount() {
  //   console.log('state', this.state);
  //   // this.setState({ cancionesMarkup: this.getSongsListMarkup()})
  // }
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
  goToMyProfile = this.linkTo('/autor');

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



  getTitle = (routeText) => { //the semantic key names of the database entries of the songs must be a reduced version of the route without whitespaces nor dashes, just all the letters alltogether

    let cancionId = /[^/]*$/g.exec(routeText)[0].replace(/-/g, '');

    let cancionData = this.state.cancionesData[cancionId];

    if (cancionData)
      {return cancionData.title}
    else
      {return 'La Vida-la'}
    }

  render(props) {
    console.log(props.selectedRoute);
    return (<div>
      <TopAppBar style={{
          // borderBottomRightRadius: '34px',
          // width: 'auto',
          width: '100vw',
          padding: '0rem 3rem 0rem 1rem',
          // backgroundImage: 'radial-gradient(at 0px 0px, rgb(21, 88, 253) 40%, rgb(38, 107, 242) 90%)',
          // backgroundImage: 'radial-gradient(#6c2e53 69%, #b6373703 60%)',
          // backgroundImage: 'linear-gradient(#6c2e53 9%, #b6373703 60%)',
          // backgroundColor: 'unset',
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
              }}>{
                props.selectedRoute !== '/'
                  ? `${props.selectedRoute
                    ? this.getTitle(props.selectedRoute)
                    : ''}`
                  : ' Clarisa Prince y '
              }</TopAppBar.Title>
          </TopAppBar.Section>
        </TopAppBar.Row>
      </TopAppBar>
      <Drawer modal="modal" ref={this.drawerRef}>
        <Drawer.DrawerContent>
          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={(props.selectedRoute === '/' || props.selectedRoute === '/no-encontrado')} onClick={this.goHome}>
            <List.ItemGraphic>home</List.ItemGraphic>
            Home
          </Drawer.DrawerItem>
          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={props.selectedRoute === '/autor'} onClick={this.goToMyProfile}>
            <List.ItemGraphic>account_circle</List.ItemGraphic>
            Ficha Tecnica
          </Drawer.DrawerItem>

          <Drawer.DrawerItem style={{
              cursor: 'pointer'
            }} selected={props.selectedRoute === '/canciones'} onClick={this.goToCanciones}>
            <h1 style={{
                marginLeft: '1rem'
              }}>Canciones</h1>
            <List.ItemGraphic>music_note</List.ItemGraphic>
          </Drawer.DrawerItem>

          {/* this.state.cancionesMarkup */}
          {this.getSongsListMarkup()}

        </Drawer.DrawerContent>
      </Drawer>
    </div>);
  }
  getIsSelectedSong(cancion) {
    // this.setState({selecteSong: cancion})
    return
  }
  getSongsListMarkup() {
    // debugger
    let cancionesList = []
    for (var cancion in this.state.cancionesData) {
      if (this.state.cancionesData.hasOwnProperty(cancion)) {
        cancionesList.push(<Drawer.DrawerItem style={{
            cursor: 'pointer'
          }} selected={this.props.selectedRoute === `/cancion/${this.state.cancionesData[cancion].slug}`}
					onClick={this[`goTo${cancion}`]}>
          {this.state.cancionesData[cancion].title}
        </Drawer.DrawerItem>)
      }
    }
    // this.setState({cancionesMarkup: cancionesList});
    return cancionesList;
  }
}
