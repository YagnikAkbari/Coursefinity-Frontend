export const stringConverter = (fileName, length) => {
  return fileName.length > length
    ? `${fileName.substring(0, length)}...`
    : fileName;
};

export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};
