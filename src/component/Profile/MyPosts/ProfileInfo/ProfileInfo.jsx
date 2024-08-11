import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=bb2e0289e5e74b1bc15aab319ab2749444e89e9f-5209766-images-thumbs&n=13"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )

}
export default  ProfileInfo