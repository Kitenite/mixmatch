import React, { useState } from 'react';
import { updateMatchStatus } from '../user/GraphOperations';

enum UserMatchStatus {
	NotSeen = "NotSeen",
	Liked = "Liked",
	Disliked = "Disliked"
}

const SwipePage = (props:any) => {
    const matches = props.user.matches
    const [displayingMatchUser, setDisplayingMatchUser] = useState(matches[0]);
    console.log(matches)
    let match_count = 0
    // Change match: setdisplayingUser(user)
    console.log(matches)

    const SwipeUser = (user:any, userMatchStatus: UserMatchStatus, swipeChange: () => void) => {
        console.log(user, userMatchStatus)
        updateMatchStatus(displayingMatchUser.id, userMatchStatus)
        // Check if there is a match
        swipeChange()
    }

    const SwipeChange = () => {
        match_count += 1
        if (match_count < matches.length) {
            setDisplayingMatchUser(matches[match_count])
        } else {
            console.log("Oops. Out of users to match with.")
        }
    }
    return (
        <div>
            <button onClick={() => SwipeUser(displayingMatchUser, UserMatchStatus.Disliked, SwipeChange)}>No</button>
            <div><h1>Swipe {displayingMatchUser.targetUser.name}</h1></div>
            <button onClick={() => SwipeUser(displayingMatchUser, UserMatchStatus.Liked, SwipeChange)}>Yes</button>
        </div>
    )
}

export default SwipePage
