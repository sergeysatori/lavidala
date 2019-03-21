import {h, Component} from 'preact';
import Button from 'preact-material-components/Button';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Apoyan extends Component {
  state = {
  };

  // gets called when this route is navigated to
  componentDidMount() {

  }

  // gets called just before navigating away from the route
  componentWillUnmount() {

  }


  // Note: `user` comes from the URL, courtesy of our router
  render({
    user
  }) {
    return (<div class={`${style.profile} page main-container`} style={{
        // backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',
        width: '100%',
        height: '150%'
      }}>
      <br/><br/><br/><br/>
      <Card style={{
          width: '90vw',
          margin: 'auto',
          maxWidth: '600px',
          backgroundColor: 'hsla(356, 11%, 7%, 0.85)',
          color: '#fff',
					padding: '1rem'
        }}>
        <p style={{
          fontSize: '1.2rem',
          textRendering: 'optimizeLegibility',
          margin: '3rem'
        }} >
        Participando con tu apoyo podemos seguir mejorando para disfrutar de más arte juntos.
        </p>
        <p style={{fontSize: '1.5rem', textAlign: 'right', fontFamily: "Sign Painter", margin: '3rem'}} >
          <bold>La Vida-la</bold> <br/>
        </p>

        <p
        dangerouslySetInnerHTML={{
          __html: `<a mp-mode="dftl" class="${style.colaborateButton}"
                   href="https://www.mercadopago.com/mlu/checkout/start?pref_id=293736760-7ceed2b8-4994-4625-a8f4-c62e8a0f75b1" name="MP-payButton" class='orange-tr-s-rn-none'>Promotor <small>$100</small></a>
          <script type="text/javascript">
          (function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
          </script>`
        }}>

        </p>
        <p
        dangerouslySetInnerHTML={{
          __html: `<a mp-mode="dftl" href="https://www.mercadopago.com/mlu/checkout/start?pref_id=293736760-59ba7314-a812-4f6a-b542-7cdc9f83969e" name="MP-payButton" class="${style.colaborateButton}">Patrocinador <small>$300</small></a>
          <script type="text/javascript">
          (function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
          </script>`
        }}>

        </p>
      </Card>
      <br/><br/><br/><br/>
    </div>);
  }
}
