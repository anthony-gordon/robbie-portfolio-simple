const reducer = (state = [], action) => {
  switch (action.type) {
    case "updateArtistDescription":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
