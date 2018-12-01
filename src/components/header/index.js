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
  goToLadelPerdon = this.linkTo('/tema/del-perdon');

  render(props) {
    console.log(props.selectedRoute);
    return (<div>
      <TopAppBar style={{
          borderBottomRightRadius: '34px',
          width: 'auto',
          padding: '0rem 3rem 0rem 1rem',
					backgroundImage: 'radial-gradient(at 0px 0px, rgb(21, 88, 253) 40%, rgb(38, 107, 242) 90%)',
		     	transition: 'width 2s'
        }} className="toolbar">
        <TopAppBar.Row>
          <TopAppBar.Section align-start="align-start">
            <TopAppBar.Icon menu="menu" style={{cursor: 'pointer'}} onClick={this.openDrawer}>
              flare
            </TopAppBar.Icon>
            {props.selectedRoute !== '/' ?
							<TopAppBar.Title style={{
	                fontFamily: 'Sign Painter',
	                fontSize: '2rem'
	              }}>La Vida-la {`${props.selectedRoute ? /[^/]*$/g.exec(props.selectedRoute)[0].replace(/-/g, ' '):''}`}</TopAppBar.Title>: null}
          </TopAppBar.Section>
        </TopAppBar.Row>
      </TopAppBar>
      <Drawer modal="modal" ref={this.drawerRef}>
        <Drawer.DrawerContent>
          <Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
            <List.ItemGraphic>home</List.ItemGraphic>
            Home
          </Drawer.DrawerItem>
          <Drawer.DrawerItem selected={props.selectedRoute === '/autor'} onClick={this.goToMyProfile}>
            <List.ItemGraphic>account_circle</List.ItemGraphic>
            Profile
          </Drawer.DrawerItem>
          <h1 style={{
              marginLeft: '1rem'
            }}>Temas</h1>
          <Drawer.DrawerItem selected={props.selectedRoute === '/tema/del-perdon'} onClick={this.goToLadelPerdon}>
            <List.ItemGraphic>account_circle</List.ItemGraphic>
            Del perdon
          </Drawer.DrawerItem>
        </Drawer.DrawerContent>
      </Drawer>
    </div>);
  }
}
