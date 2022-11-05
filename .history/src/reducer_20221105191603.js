let state;

function reducer(state ={countaction){
    switch(action.type){
        case "counter/increment":
            return {count: state.count +1};
            default:
                return state;
    }
}