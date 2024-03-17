import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard
                user='midudev' 
                isFollowing 
            >
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard 
                user='dariorobaina' 
                isFollowing={ false } 
            >
                Dario Robaina
            </TwitterFollowCard>
            <TwitterFollowCard
                user='helloworld' 
                isFollowing 
            >  
                Hello World
            </TwitterFollowCard>
        </section>
    )
}