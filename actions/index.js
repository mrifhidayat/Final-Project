const _add = () => ({
  type: "ADD",
});

const _substract = () => ({
  type: "SUBSTRACT",
});

export function incrementAsync() {
  return async (dispatch) => {
    const response = await fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-03&sortBy=publishedAt&apiKey=3edb51dae8694e849f94bb84b47cd9bf"
    );
    dispatch({
      type: "GET_DATA",
      payload: response.json(),
    });

    setTimeout(() => {
      dispatch(_add());
    }, 100);
  };
}

export function decrementAsync() {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(_substract());
    }, 100);
  };
}
