//Index.js
export const setSelectedSlid=(slid_obj)=>{
    return {
        type: 'UPDATE_SELECTED_SLID',
        obj:slid_obj
    };
}

export const updateModelMap=(slid_obj)=>{
    return {
        type: 'UPDATE_MODEL_MAP',
        obj:slid_obj
    };
}
