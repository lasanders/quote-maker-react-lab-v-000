export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    author
  };
};

export const removequote = id => {
  return {
    type: 'REMOVE_QUOTE',
    id
  };
};

export const upvoteQuote = quote => {
  return {
    type: 'UPVOTE_QUOTE',
    book
  };
};

export const downvoteQuote= quote => {
  return {
    type: 'DOWNVOTE_QUOTE',
    id
  };
};
