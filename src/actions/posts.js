import axios from "axios";
import {UPDATE_POSTS} from './types'

export function fetchPosts() {
    return (dispatch) => {
        const BASE_URL = 'https://dummyapi.io/data/api';
        let APP_ID = `604c9a507e700fd7e57af34f`;
        APP_ID = `${APP_ID}`;
        axios.get(`${BASE_URL}/post?page=1&limit=5`, { headers: { "app-id" : APP_ID } })
            .then(( res ) => {
                dispatch(updatePosts(res.data.data));

            });
    }
}

export function updatePosts(posts){
    return {
        type: UPDATE_POSTS,
        posts
    }
}