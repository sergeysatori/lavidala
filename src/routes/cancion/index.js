import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {isMobile} from '../../utils/responsive';
import {canciones} from '../../database';
import emojis from 'emojis';

import style from './style';

export default class Cancion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      data: canciones[this.props.id.replace(/-/g, '')]
    };
    // this.isMobile = this.isMobile.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: canciones[nextProps.id.replace(/-/g, '')]
    })
  }
  componentDidMount() {
    // this.isMobile();
    // window.addEventListener("resize", this.isMobile.bind(this));
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.isMobile.bind(this));
  }
  // <LayoutGrid.Cell class={style.temaPresentVisual} style={{
  //     backgroundImage: `url(${this.state.data.mainImage})`
  //   }} desktopCols="6" phoneCols="12" tabletCols="12">{this.props.id}</LayoutGrid.Cell>
  render() {
    return (<div class={`${style.home} page main-container`} style={{
        backgroundImage: `url(${this.state.data.mainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: '100vw',
        // height: '100vh',
      }}>
      <div style={{
          backgroundColor: 'hsla(356, 11%, 7%, 0.85)'
        }}>
        <LayoutGrid style={{
            minHeight: '100vh'
          }}>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell name='video-container' class={style.temaPresentVisual} style={{
                height: '50vh'
              }} desktopCols="6" phoneCols="12" tabletCols="12">
              <iframe width="100%" height="100%" src={`${this.state.data.videoURL}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                Cargando...
              </iframe>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell style={{
                // height: '100%',
                color: '#fff',
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: 'transparent',
                margin: '0 auto auto auto'
              }} desktopCols="6" phoneCols="12" tabletCols="12">
              <div name='lyrics-container' class={style.lyricsContainer}
                 style={{
                  backgroundColor: 'hsla(0, 1%, 16%, 0.9)',
                  padding: '1rem .3rem',
                  borderRadius: '1%',
                  border: 'solid hsl(0, 3%, 14%) 9px',
                  fontSize: '1.5rem',
                  color: 'hsla(0, 1%, 92%, 1)'
                }} dangerouslySetInnerHTML={{
                  __html: this.state.data.letra
                }}/>

            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    </div>);
  }
}
