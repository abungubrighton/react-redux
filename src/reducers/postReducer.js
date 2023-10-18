import { FETCH_POSTS, NEW_POST } from "../actions/types";
// defining initial state

const initialState = {
    items: [],
    item: {}
};


// the actual reducer   function
// takes in the initial Slice State, and action, evaluates the action

export default function(state = initialState, action) {

    switch (action.type) {
        default: return state
    }
};