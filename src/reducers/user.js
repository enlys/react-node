export default function topList(state={
    loading: true,
    data:{
        loginname:"",
        avatar_url: "",
        score:0,
        create_at:"",
        recent_topics:[],
        recent_replies:[]
    }
    
},action) {
    // console.log(action.type);
    switch(action.type){
        case "USER_UPDATA":
                return {
                    loading: true,
                    data:state.data
                };
            case "USER_SUCC":
                // console.log( action.data.data.data);
                return {
                    loading: false,
                    data: action.data.data.data
                };
            case "USER_ERROR":
                return {
                    loading: false,
                    data: {
                        data:{
                            loginname:"",
                            avatar_url: "",
                            score:0,
                            create_at:"",
                            recent_topics:[],
                            recent_replies:[]
                        }
                    }
                }
        default:
            return state;
    }
}