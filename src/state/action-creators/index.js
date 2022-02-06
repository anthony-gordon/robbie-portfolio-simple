export const toggleMenuDisplay = (data) => {
  return (dispatch) => {
    dispatch({
      type: "toggleMenuDisplay",
      payload: data,
    });
  };
};

export const toggleMenuOpacity = (data) => {
  return (dispatch) => {
    dispatch({
      type: "toggleMenuOpacity",
      payload: data,
    });
  };
};

export const updateArtworkList = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateArtworkList",
      payload: data,
    });
  };
};

export const updateArtistDescription = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateArtistDescription",
      payload: data,
    });
  };
};

export const updateLinks = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateLinks",
      payload: data,
    });
  };
};

export const updateWindowSize = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateWindowSize",
      payload: data,
    });
  };
};

export const updateLoading = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateLoading",
      payload: data,
    });
  };
};
