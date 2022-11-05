let state;

function reducer(state ={action){
    switch(action.type){
        case "counter/increment":
            return {count: state.count +1};
            default:
                return state;
    }
}