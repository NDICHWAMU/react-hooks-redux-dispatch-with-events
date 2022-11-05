let state;

function reducer(state ={count = 0}action){
    switch(action.type){
        case "counter/increment":
            return {count: state.count +1};
            default:
                return state;
    }
}