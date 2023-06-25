export const generateImage = () => {
  const id = Date.now().toString();
  return `https://picsum.photos/200?id=${id}`;
};
