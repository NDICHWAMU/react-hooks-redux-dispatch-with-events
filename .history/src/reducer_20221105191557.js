let state;

function reducer(state 0action){
    switch(action.type){
        case "counter/increment":
            return {count: state.count +1};
            default:
                return state;
    }
}