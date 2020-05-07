const deletepost = (id) => {
  return {
    type: "DELETE_POST",
    id,
  };
};
export default deletepost;
