//all reducers listen for actions announcement globally
export default function(state=false, action){ // allow access to other files
    switch(action.type){
        case "POKEBALL_CATCH":
            return action.payload; //payload of the action that is fired
            break;
    }
    return state;

}
