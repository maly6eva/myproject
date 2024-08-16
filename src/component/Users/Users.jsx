import React from 'react';
import styles from './Users.module.css';


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [{id: 1, photoUrl: 'https://ncrdo.ru/upload/medialibrary/876/876bd8b93b69f18466ca518c39921209.jpg',
                followed: false, fullName: 'Dmitry', status: 'I am a boss', lokation: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://img.freepik.com/premium-photo/a-bearded-man-in-a-casual-peach-tshirt-gives-two-thumbs-up-smiling-confidently-studio-shot-against-a_139623-905.jpg',
                    followed: true, fullName: 'Lana', status: 'I am a ahah', lokation: {city: 'Moskow', country: 'Rasha'}},
                {id: 3, photoUrl: 'https://www.kino-teatr.ru/acter/photo/9/3/739/pv_386010.jpg',
                    followed: false, fullName: 'Kirill', status: 'I am a lol', lokation: {city: 'Kiev', country: 'Ukraine'}}]
        )

    }    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="photo" className={styles.userphoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button>
                            : <button onClick={() => (props.follow(u.id))}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;