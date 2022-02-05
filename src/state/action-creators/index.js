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
