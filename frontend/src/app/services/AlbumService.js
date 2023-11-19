const fetchAlbums = async (artist) => {
  try {
    const response = await fetch(`http://localhost:8080/api/artist/${artist}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default {
  fetchAlbums,
};
