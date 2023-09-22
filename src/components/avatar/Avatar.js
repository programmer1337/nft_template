import avatar from "./avatar.module.css";

const Avatar = ({avatarSrc, height, width}) => {
    return (
        <div>
            <img
                src={avatarSrc}
                className={avatar.userAvatar}
                alt={"userAvatar"}
                style={{
                    height: height,
                    width: width,
                }}
            />
        </div>
    )
}

export default Avatar;