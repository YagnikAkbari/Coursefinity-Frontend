export const genrateResponse = async (response) => {
  return {
    ok: response.ok,
    statusText: response.statusText,
    body: await response.json(),
    statusCode: response.status,
    url: response.url,
  };
};

export const stringConverter = (fileName, length) => {
  return fileName.length > length
    ? `${fileName.substring(0, length)}...`
    : fileName;
};
