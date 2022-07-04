import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
//movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({

        //* Get genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        }),
        //* Get movies by [Type]
        getMovies: builder.query({
            query: ({genreIdOrCategoryName, page , searchQuery}) => {
                // GEt movies by search
                if(searchQuery) {
                    return `/search/movie?query=${searchQuery}&page${page}&api_key=${tmdbApiKey}`;
                }
                // popular top_rated --> string
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string')
                {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }
                // get movies by genre
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number')
                {
                    console.log('here');
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }
                // get popular movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),

        //Get movie
        getMovie: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
        }),

        //* Get user specific lists
        getRecommendations: builder.query({
            query: ( {movie_id, list}) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`
        }),

        //* Get actors details
        getActorDetails: builder.query({
            query: (id) => `person/${id}?api_key=${tmdbApiKey}`
        }),
        // Get movies for the specific actor that checking
        getMoviesByActorId: builder.query({
            query: ({id, page}) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMovieQuery,
    useGetRecommendationsQuery,
    useGetActorDetailsQuery,
    useGetMoviesByActorIdQuery,
} = tmdbApi;