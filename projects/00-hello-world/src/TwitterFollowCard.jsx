import { useState } from "react"

export function TwitterFollowCard ( { children, user = 'default', isFollowing } ) {

    const [following, setFollowing] = useState(isFollowing)
    const buttonClassName = following
        ? 'tw-follow-card-followButton is-following'
        : 'tw-follow-card-followButton'
    
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    className='tw-follow-card-header-avatar' 
                    alt="User Avatar" 
                    src={`https://unavatar.io/github/${user}`} />
                <div className='tw-follow-card-header-info'>
                    <strong> { children } </strong>
                    <span> @{ user } </span>
                </div>
            </header>
            <aside>
                <button 
                    className = { buttonClassName }
                    onClick = {() => setFollowing(!following)}
                >
                    <span className='tw-follow-card-buttonText'>
                        { following == true ? 'Following' : 'Follow' }
                    </span>
                    <span className='tw-follow-card-stopFollow'>
                        Stop follow
                    </span>
                </button>
            </aside>
        </article>
    )
} 