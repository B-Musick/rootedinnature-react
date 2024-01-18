// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const plantsApi = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'plants',
    // All of our requests will have URLs starting with '/plants'
    baseQuery: fetchBaseQuery({ baseUrl: '/plants' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        fetchPlants: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => 'all'
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = plantsApi;