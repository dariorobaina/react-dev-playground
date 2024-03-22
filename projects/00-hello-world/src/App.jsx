import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        username: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },
    {
        username: 'dariorobaina',
        name: 'Dario Robaina',
        isFollowing: false,
    },
    {
        username: 'helloworld',
        name: 'Hello World',
        isFollowing: false,
    },
]

export function App () {
    return(
        <section className='App'>
            {
                users.map((element) => {
                    return (
                    <TwitterFollowCard
                        user = {element.username}
                        isFollowing = {element.isFollowing}
                        key={element.username + element.name}
                    >
                        {element.name}
                    </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}