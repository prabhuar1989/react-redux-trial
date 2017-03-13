// export const SHOW_SHIPS_MODAL = "SHOW_SHIPS_MODAL";
export const SELECT_SHIPS = "SELECT_SHIPS";

// export function showShip(showShipModal){
//     return {
//         type : SHOW_SHIPS_MODAL,
//         payload : showShipModal
//     }
// }

export function selectShips(selectedShips){
    //console.log("inside action : ", selectedShips);
    return {
        type : SELECT_SHIPS,
        payload : selectedShips
    }
}

export function deselectShips(index){
    return {
        type : DESELECT_SHIPS,
        payload : index
    }
}