import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO':
        return action.video || null; //return nre state
        // if video dne, it will return undefined, it will be outside the bound of the two types of objects expecting. So we safeguard it by providing null
    default:
        return state; //return existing state
  }
};

export default currentVideoReducer;
