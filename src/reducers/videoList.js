import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.video || []; //safeguard is empty array
    default:
      return state;
  }
};

export default videoListReducer;
