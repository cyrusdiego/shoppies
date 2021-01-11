export const splitToChunks = (data, chunkSize) => {
  if (!data) {
    return;
  }

  let chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    let chunk = data.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};
