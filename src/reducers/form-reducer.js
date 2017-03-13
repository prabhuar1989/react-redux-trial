import SELECT_SHIPS from "../actions/index";

const INITIAL_STATE = {
    shipList : [
        {id : "1", name : "Titanic"}, 
        {id : "2", name : "INS Vikrant"}, 
        {id : "3", name : "INS Vikramaditya"},
        {id : "4", name : "INS Chakra"},
        {id : "5", name : "INS Viraat"}],
    selectedShips : [{id : "5", name : "INS Viraat"}],
    
}

export default function(state = INITIAL_STATE, action){
    //console.log("Selected ships : ",action.payload);
    switch(action.type) {
        case SELECT_SHIPS :
            //state.selectedShips = action.payload;
            return {
                ...state,
                selectedShips : action.payload
            }
        
        // case DESELECT_SHIPS :
        
        // return {
        //     ...state,
        //     selectedShips : ...state.selectedShips

        // }

         default : 
             return state;
    }
}