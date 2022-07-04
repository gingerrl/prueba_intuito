// const SAVE_FORM_DATA= "SAVE_FORM_DATA";

// function saveData(data) {
//     return {
//         type: SAVE_FORM_DATA,
//         payload: data
//     }
// }

const SAVE_FORM_DATA = "SAVE_FORM_DATA";

const saveData = data =>{
    console.log("actionss",data)

    return{
        type:SAVE_FORM_DATA,
        payload:data
    }
}
export default saveData;
