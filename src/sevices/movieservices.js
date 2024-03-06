const key = import.meta.env.VITE_TMDB_KEY;

const baseUrl = "https://www.themoviedb.org/settings/api";

const endpoints ={
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-USpage=2`,
    comdey:  `${baseUrl}/movie/popular?api_key=${key}&language=en-US&query=comdey&page=1&include_adult = false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,

};

export default endpoints ;

