//all reducers listen for actions announcement globally
export default function(state=null, action){ // allow access to other files
    switch(action.type){
        case "POKEMON_EVOLUTIONS":
            return action.payload; //payload of the action that is fired
            break;
    }
    return state;

}
