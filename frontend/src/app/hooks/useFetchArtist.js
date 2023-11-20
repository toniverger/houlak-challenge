import { useEffect, useState } from "react";

import AlbumService from "../services/AlbumService";

const useFetchArtistAlbums = (search, setSearch) => {
  const [data, setData] = useState({ items: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await AlbumService.fetchAlbums(search);
        setData(data);
      } catch (error) {
        setError(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    if (search && search.trim() !== "") {
      fetchData(search);
    } else {
      setSearch("");
    }
  }, [search]);

  return {
    error,
    data,
    loading,
  };
};

export default useFetchArtistAlbums;
