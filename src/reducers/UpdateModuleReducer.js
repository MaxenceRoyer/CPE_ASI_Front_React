//UpdateModuleReducer.js
//var Tools = require('../services/Tools.js');
const updateModelReducer= (state={presentation:{},contentMap:{}},action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            return state; //TO DO
        case 'UPDATE_PRESENTATION_SLIDS':
            return state;
        case 'UPDATE_CONTENT_MAP':
            const newState1={contentMap:action.obj};
            console.log("Test")
            return newState1;
        case 'ADD_CONTENT':
            return state; //TO DO
        default:
            return state;
    }
}
export default updateModelReducer;