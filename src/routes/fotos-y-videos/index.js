import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {isMobile} from '../../utils/responsive';
import {fotosyvideos} from '../../database';
import emojis from 'emojis';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import style from './style';

export default class FotosYVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: false,
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 4000,
      thumbnailPosition: 'bottom',
      showVideo: {},
      images: fotosyvideos
    };


  }

  componentWillReceiveProps(nextProps) {

    this.setState({images: fotosyvideos})
  }
  componentDidMount(){
    // if(window){
    //   window.setTimeout(function(){
    //     console.log('autoplay');
    //     this.setState({autoPlay: true});
    //     this._imageGallery.play();
    //   }.bind(this),
    //   12000);
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval || this.state.slideDuration !== prevState.slideDuration) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    this.setState({[state]: event.target.value});
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    this.setState({thumbnailPosition: event.target.value});
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({original: `${PREFIX_URL}${i}.jpg`, thumbnail: `${PREFIX_URL}${i}t.jpg`});
    }

    return images;
  }

  _resetVideo() {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({showVideo: this.state.showVideo});

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (<div className='image-gallery-image'>
      {
        this.state.showVideo[item.embedUrl]
          ? <div className='video-wrapper'>
              <a className='close-video' onClick={this._toggleShowVideo.bind(this, item.embedUrl)}></a>
              <iframe width='560' height='315' src={item.embedUrl} frameBorder='0' allowFullScreen="allowFullScreen"></iframe>
            </div>
          : <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img src={item.original}/> {
                item.description && <span className='image-gallery-description' style={{
                      right: '0',
                      left: 'initial'
                    }}>
                    {item.description}
                  </span>
              }
            </a>
      }
    </div>);
  }

  render() {
    return (<div class={`${style.home} page main-container`}>
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols={12} class={{
              color: '#fff'
            }} style={{
              height: '100%'
            }} desktopCols="6" phoneCols="12" tabletCols="12">

            <ImageGallery autoPlay={this.state.autoPlay} ref={i => this._imageGallery = i} items={this.state.images} lazyLoad={true} onClick={this._onImageClick.bind(this)} onImageLoad={this._onImageLoad} onSlide={this._onSlide.bind(this)} onPause={this._onPause.bind(this)} onScreenChange={this._onScreenChange.bind(this)} onPlay={this._onPlay.bind(this)} infinite={this.state.infinite} showBullets={this.state.showBullets} showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton} showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton} showThumbnails={this.state.showThumbnails} showIndex={this.state.showIndex} showNav={this.state.showNav} isRTL={this.state.isRTL} thumbnailPosition={this.state.thumbnailPosition} slideDuration={parseInt(this.state.slideDuration)} slideInterval={parseInt(this.state.slideInterval)} additionalClass={style.appimagegallery}/>

          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
  // render() {
  //   return (<div class={`${style.home} page main-container`}>
  //     <ImageGallery items={this.state.data} sizes="(min-width: 840px) 40vw, 100vw"/>
  //   </div>);
  // }
}
