const SAVE_FORM_DATA = "SAVE_FORM_DATA";

const saveData = data =>{
    return{
        type:SAVE_FORM_DATA,
        payload:data
    }
}
export default saveData;
