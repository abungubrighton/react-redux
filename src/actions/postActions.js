/*Define the functions that take the Actual ACTIONS
And if some data is involved , that will get passed down to the REDUCER as a payload 
Reducer will take the data and modify the state in the store
 */
import { FETCH_POSTS, NEW_POST } from "./types";


export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) // call it dispatching  fetchPosts to the reducer
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
}