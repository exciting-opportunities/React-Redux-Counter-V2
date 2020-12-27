const reducer = (state = 0, action)=>{
    switch (action.type){
        case 'PLUS':
            return state +1;
        case 'MINUS':
            return state -1;
        case 'REFRESH':
            return 0
        default:
            return state;
    }
    return 0;


}
export default reducer;