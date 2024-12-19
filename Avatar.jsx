import React from "react"
import { IoPersonSharp } from "react-icons/io5"

/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({ src, alt, children, color }) {

    let randomColor = Math.floor(Math.random() * 5 + 1)

    switch (randomColor) {
        case 1:
            color = "navy"
            break
        case 2:
            color = "pink"
            break
        case 3:
            color = "red"
            break
        case 4:
            color = "blue"
            break
        case 5:
            color = "green"
            break
    }



    if (src) {
        return (
            <div className="avatar">
                <img src={src} alt={alt} />
            </div>
        )
    } else if (children) {
        return (
            <div className="avatar avatar-letters">
                {children}
            </div>
        )
    } else {
        return (
            <div className={`avatar avatar-icon ${color}`}>
                <IoPersonSharp />
            </div>
        )
    }
}