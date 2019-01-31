export const isMobile = function() {
  // return this.setState({
  //   isMobile: window.innerWidth < 600
  //     ? true
  //     : false
  // }, ()=> {console.log('is mobile');})
};
export const getImageSize = function(winWidth, imgWidth, winHeight, imgHeight) {
  let deviceFactor = 1;
  if (winHeight > winWidth) {
    deviceFactor = 1
  }
  winWidth = winWidth * deviceFactor
  winHeight = winHeight * deviceFactor
  let ratio = Math.min(winWidth / imgWidth, winHeight / imgHeight);
  return {
    height: imgHeight * ratio,
    width: imgWidth * ratio
  }
};
