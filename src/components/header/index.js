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
// import style from './style';

export default class Header extends Component {
	constructor(props){
		super(props);

	}
  closeDrawer() {
    this.drawer.MDComponent.open = false;
    this.state = {};
    // this.goTo = this.goTo.bind(this);

  }

  openDrawer = () => (this.drawer.MDComponent.open = true);

  drawerRef = drawer => (this.drawer = drawer);

  linkTo = path => () => {
    route(path);
    this.closeDrawer();
  };

  goHome = this.linkTo('/');
  goToMyProfile = this.linkTo('/autor');
  goToLadelPerdon = this.linkTo('/cancion/del-perdon');
  goToCanciones = this.linkTo('/canciones');
  goToGraciasALaVida = this.linkTo('/cancion/gracias-a-la-vida');

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
            <TopAppBar.Icon menu="menu" style={{cursor: 'pointer'}} onClick={this.openDrawer}>
              flare
            </TopAppBar.Icon>

							<TopAppBar.Title style={{
	                fontFamily: 'Sign Painter',
	                fontSize: '1.5rem',
									margin: 'auto'
	              }}>{props.selectedRoute !== '/' ? `La Vida-la ${props.selectedRoute ? /[^/]*$/g.exec(props.selectedRoute)[0].replace(/-/g, ' '):''}` : ' Clarisa Prince y '}</TopAppBar.Title>
          </TopAppBar.Section>
        </TopAppBar.Row>
      </TopAppBar>
      <Drawer modal="modal" ref={this.drawerRef}>
        <Drawer.DrawerContent>
          <Drawer.DrawerItem style={{cursor: 'pointer'}} selected={(props.selectedRoute === '/' || props.selectedRoute === '/no-encontrado')} onClick={this.goHome}>
            <List.ItemGraphic>home</List.ItemGraphic>
            Home
          </Drawer.DrawerItem>
          <Drawer.DrawerItem style={{cursor: 'pointer'}} selected={props.selectedRoute === '/autor'} onClick={this.goToMyProfile}>
            <List.ItemGraphic>account_circle</List.ItemGraphic>
            Profile
          </Drawer.DrawerItem>

					<Drawer.DrawerItem style={{cursor: 'pointer'}} selected={props.selectedRoute === '/canciones'} onClick={this.goToCanciones}>
						<h1 style={{
	              marginLeft: '1rem'
	            }}>Canciones</h1>
							<List.ItemGraphic>music_note</List.ItemGraphic>
          </Drawer.DrawerItem>
					<Drawer.DrawerItem style={{cursor: 'pointer'}} selected={props.selectedRoute === '/cancion/del-perdon'} onClick={this.goToLadelPerdon}>
            Del perdon
          </Drawer.DrawerItem>
					<Drawer.DrawerItem style={{cursor: 'pointer'}} selected={props.selectedRoute === '/cancion/gracias-a-la-vida'} onClick={this.goToGraciasALaVida}>
            Gracias a la vida
          </Drawer.DrawerItem>
        </Drawer.DrawerContent>
      </Drawer>
    </div>);
  }
}
