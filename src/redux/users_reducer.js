const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    // users: [
    //     {id: 1, photoUrl: 'https://ncrdo.ru/upload/medialibrary/876/876bd8b93b69f18466ca518c39921209.jpg',
    //         followed: false, fullName: 'Dmitry', status: 'I am a boss', lokation: {city: 'Minsk', country: 'Belarus'}},
    //     {id: 2, photoUrl: 'https://img.freepik.com/premium-photo/a-bearded-man-in-a-casual-peach-tshirt-gives-two-thumbs-up-smiling-confidently-studio-shot-against-a_139623-905.jpg',
    //         followed: true, fullName: 'Lana', status: 'I am a ahah', lokation: {city: 'Moskow', country: 'Rasha'}},
    //     {id: 3, photoUrl: 'https://www.kino-teatr.ru/acter/photo/9/3/739/pv_386010.jpg',
    //         followed: false, fullName: 'Kirill', status: 'I am a lol', lokation: {city: 'Kiev', country: 'Ukraine'}}
    // ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

            case SET_USERS: {
                return { ...state, users: [ ...state.users, ...action.users]}
            }

        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;