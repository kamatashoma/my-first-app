const initialState = {
  clips: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return { ...state, clips: [...state.clips, action.clips] };
    // ...stateはスプレッド演算子でstateの値を展開、action.clipsは/stote/acton/user.jsのの引数clipに値が代入されるので、それを追加している
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.fillter((clip) => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};

export default reducer;
