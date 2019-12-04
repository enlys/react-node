export default function topList(state={
    loading: true,
    data: {
         data:{
            reply_count: 0,
             replies:[],
            author:{},
            create_at:""
         }
    }
    
},action) {
    // console.log(action.type);
    switch(action.type){
        case "Details_UPDATA":
            return {
                loading: true,
                data:state.data
            };
        case "Details_SUCC":
            //  console.log(action.data.data);
            return {
                loading: false,
                data: action.data.data
            };
        case "Details_ERROR":
                
            return {
                loading: false,
                data: {
                    data:{
                        reply_count: 0,
                        replies:[],
                        author:{},
                        create_at:""
                    }
                }
            }
        default:
            return state;
    }
}