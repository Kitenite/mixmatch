import React, { useState } from 'react';
import { updateMatchStatus } from '../user/GraphOperations';

enum UserMatchStatus {
	NotSeen = "NotSeen",
	Liked = "Liked",
	Disliked = "Disliked"
}

const SwipePage = (props:any) => {
    const matches = props.user.matches
    const [displayingUser, setdisplayingUser] = useState(matches[0]);
    console.log(matches)
    let match_count = 0
    // Change match: setdisplayingUser(user)
    console.log(matches)

    const SwipeUser = (user:any, userMatchStatus: UserMatchStatus, swipeChange: () => void) => {
        console.log(user, userMatchStatus)
        updateMatchStatus(props.user.id, displayingUser.targetUserID, displayingUser.matchID, userMatchStatus)
        swipeChange()
    }

    const SwipeChange = () => {
        match_count += 1
        if (match_count < matches.length) {
            setdisplayingUser(matches[match_count])
        } else {
            console.log("Oops. Out of users to match with.")
        }
    }
    return (
        <div>
            <button onClick={() => SwipeUser(displayingUser, UserMatchStatus.Disliked, SwipeChange)}>No</button>
            <div><h1>Swipe {displayingUser.targetUser.name}</h1></div>
            <button onClick={() => SwipeUser(displayingUser, UserMatchStatus.Liked, SwipeChange)}>Yes</button>
        </div>
    )
}

export default SwipePage
