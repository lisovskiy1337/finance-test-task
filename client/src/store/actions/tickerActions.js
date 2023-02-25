export const initialItems = (response) => ({
  type: "INITIAL_DATA",
  tickers: response,
});

export const addTicker = (name) => ({
  type: "ADD_ITEM",
  soonTickers: name,
});

export const deleteTicker = (name) => ({
  type: "REMOVE_ITEM",
  tickers: name,
});

export const loadInitialDataSocket = (socket) => {
  return async(dispatch) => {
    try {
      await dispatch({ type: "LOADING_DATA" });
      socket.on("ticker", async (res) => {
        const response = Array.isArray(res) ? res : [res];
        await dispatch(initialItems(response));
      });
    } catch (err) {
      await dispatch({ type: "LOADING_DATA_ERROR" });
    }
  };
};
