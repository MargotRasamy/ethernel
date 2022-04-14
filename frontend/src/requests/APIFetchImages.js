import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch';

const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch,
  });

export const fetchImage = async (keyword) => {
    try {
        const result = await unsplash.search.getPhotos({
            query: keyword,
            color: 'blue',
            orientation: 'landscape',
        })

        return await result.response;
    } catch (error) {
        console.log(error);
    }
}