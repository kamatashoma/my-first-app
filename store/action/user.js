export const addClip = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    clip: clip,
    // 上記のように同じ場合はclipと書いても問題なし
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip: clip,
    // 上記のように同じ場合はclipと書いても問題なし
  };
};
