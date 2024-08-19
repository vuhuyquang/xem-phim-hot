import filmService from './baseClient';

interface Film {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface FilmResponse {
  results: Film[];
  total_results: number;
}

export const getRecentlyUpdatedFilms = async (page: number = 1): Promise<any> => {
  try {
    return await filmService.get('danh-sach/phim-moi-cap-nhat', { params: { page } });
  } catch (error) {
    console.error('Error fetching recently updated films:', error);
    throw error;
  }
};


export const getPopularFilms = async (page: number = 1): Promise<FilmResponse> => {
  try {
    return await filmService.get('/movie/popular', { params: { page } });
  } catch (error) {
    console.error('Error fetching popular films:', error);
    throw error;
  }
};

export const searchFilms = async (query: string, page: number = 1): Promise<FilmResponse> => {
  try {
    return await filmService.get('/search/movie', { params: { query, page } });
  } catch (error) {
    console.error('Error searching films:', error);
    throw error;
  }
};

export const getFilmDetails = async (slug: string): Promise<any> => {
  try {
    return await filmService.get(`/phim/${slug}`);
  } catch (error) {
    console.error('Error fetching film details:', error);
    throw error;
  }
};

export const getUpcomingFilms = async (page: number = 1): Promise<FilmResponse> => {
  try {
    return await filmService.get('/movie/upcoming', { params: { page } });
  } catch (error) {
    console.error('Error fetching upcoming films:', error);
    throw error;
  }
};

export const getTopRatedFilms = async (page: number = 1): Promise<FilmResponse> => {
  try {
    return await filmService.get('/movie/top_rated', { params: { page } });
  } catch (error) {
    console.error('Error fetching top rated films:', error);
    throw error;
  }
};
