const initialState = {
  tickers: [],
  soonTickers: [],
  loading: false,
  error: false,
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        soonTickers: [...state.soonTickers, action.soonTickers]
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        tickers: [
          ...state.tickers.filter((ticker) => ticker.ticker !== action.tickers),
        ],
      };
    case "LOADING_DATA":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "INITIAL_DATA":
      return {
        ...state,
        tickers: action.tickers,
        soonTickers: [],
        loading: false,
      };
    case "LOADING_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default tickersReducer;
