import followButton from "./followButton.module.css";
import {useState} from "react";

const FollowButton = () => {
  const [isFollowed, setFollowed] = useState(null);

  return(
    <button
      onClick={()=>{setFollowed(prevState => !prevState)}}
      className={isFollowed ? [followButton.followButton, followButton.followed].join(" ") : followButton.followButton}
    >
      <div className={followButton.text}>{isFollowed ? "Unfollow" : "Follow"}</div>
    </button>
  )
}

export default FollowButton;
