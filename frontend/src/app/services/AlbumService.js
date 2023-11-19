const fetchAlbums = (artist) => {
  let draw = Math.floor(Math.random() * 2);
  if (draw === 1) {
    return 0;
  } else {
    return 6;
  }
};

export default {
  fetchAlbums,
};
