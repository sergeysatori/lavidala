import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import {route} from 'preact-router';
import Icon from 'preact-material-components/Icon';
import {getImageSize} from '../../utils/responsive'

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.handleResize = this.handleResize.bind(this)
    // this.getImageSize = this.getImageSize.bind(this)

    this.state = {
      // imageSize: getImageSize(document.body.clientWidth, 1280, document.body.clientHeight, 960),
      // isMobile: isMobile()
    }

  }
  //
  // componentWillMount() {
  //   this.handleResize();
  // }

  // <div class={`${style.home} page`}>
  // </div>
  render() {
    return (<div style={{

        // backgroundColor: 'rgb(176, 159, 115)',
        // backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',

        width: '100%',
        height: '150%',
        overflow: 'hidden'
      }}>

      <div name='crisalidas' class={style.crisalidas} style={{
          // width: `${this.state.imageSize.width}px`,
          // height: `${this.state.imageSize.height}px`,
          // marginTop: `${this.state.isMobile
          //   ? '16vh'
          //   : '0vh'}`,
          backgroundImage: 'url(/assets/images/crisalidas.gif)',
          // backgroundSize: 'cover',
          // backgroundSize: `${this.state.imageSize.width}px ${this.state.imageSize.height}px`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          margin: `2rem auto auto`
        }}>

        <div style={{
            // width: `${this.state.imageSize.width}px`,
            width: '100%',
            height: '100%',
            // height: `${this.state.imageSize.height}px`,
            // maxWidth: '90vh',
            // backgroundImage: 'url(/assets/images/crisalidas.png)',
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'top center',
            // backgroundColor: 'hsla(43, 27%, 57%, 0.17)',
            position: 'relative',
            fontFamily: 'Sign Painter',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '1.5rem',
            textTransform: 'uppercase'
          }}>
          <div class={style.verticalLink} href="/canciones" onClick={() => route('/canciones')} title="Canciones"
            style={{
              left: '5%',
              // top: `${this.state.isMobile
              //   ? '0%'
              //   : '16%'}`,
              width: '14.06%',
              // height: `${this.state.isMobile
              //   ? '100%'
              //   : '122vh'}`
            }}></div>
          <div onClick={() => route('/obras-plasticas')} href="/obras-plasticas" title="Obras plásticas" class={style.verticalLink} style={{
              left: '24%',
              // top: `${this.state.isMobile
              //   ? '0%'
              //   : '16%'}`,
              width: '14.06%',
              // height: `${this.state.isMobile
              //   ? '100%'
              //   : '122vh'}`
            }}></div>
          <div onClick={() => route('/fotos-y-videos')} href="/fotos-y-videos" title="Fotos y vídeos" class={style.verticalLink} style={{
              left: '42%',
              // top: `${this.state.isMobile
              //   ? '0%'
              //   : '16%'}`,
              width: '14.06%',
              // height: `${this.state.isMobile
              //   ? '100%'
              //   : '122vh'}`
            }}></div>
          <div onClick={() => route('/material-tea')} href="/material-tea" title="Material TEA" class={style.verticalLink} style={{
              left: '60%',
              // top: `${this.state.isMobile
                // ? '0%'
                // : '16%'}`,
              width: '14.06%',
              // height: `${this.state.isMobile
                // ? '100%'
                // : '122vh'}`
            }}></div>
          <div onClick={() => route('/ficha-tecnica')} href="/ficha-tecnica" title="Ficha técnica" class={style.verticalLink} style={{
              left: '80%',
              // top: `${this.state.isMobile
                // ? '0%'
                // : '16%'}`,
              width: '14.06%',
              // height: `${this.state.isMobile
                // ? '100%'
                // : '122vh'}`
            }}></div>
        </div>
      </div>
    </div>);
  }
}
// function isMobile() {
//   // debugger
//
//   if (document.body.clientWidth < 630) {
//     return true
//   }
//   return false
//
// }
// <Card style={{color:'hsl(230, 90%, 58%)', width: `${window.innerWidth > 679 ? this.state.imageSize.width+'px' : '90vw'}`, margin: 'auto', maxWidth: '90vh'}}>
//   <h1>Sitio en construcción</h1>
//   <Icon>event_busy</Icon>
//   <br/>
// </Card>
