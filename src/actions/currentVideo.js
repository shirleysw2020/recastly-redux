var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'CHANGE_VIDEO', //anything string you want to identify this unique data
    video: video
  }
});

export default changeVideo;
