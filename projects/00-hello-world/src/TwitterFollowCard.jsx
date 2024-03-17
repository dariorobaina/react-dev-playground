import { useState } from "react"

export function TwitterFollowCard ( { children, user = 'default', isFollowing } ) {

    const [following, setFollowing] = useState(isFollowing)
    
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
                    className='tw-follow-card-followButton'
                    onClick={() => setFollowing(!following)}
                >
                    { following == true ? 'Following' : 'Follow' }
                </button>
            </aside>
        </article>
    )
} 