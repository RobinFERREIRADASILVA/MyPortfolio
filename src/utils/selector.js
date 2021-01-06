// eslint-disable-next-line import/prefer-default-export
export const getProjectById = (id, projects) => {
  const result = projects.find((post) => post.id == id );
  return result;
};
