import { Route } from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
            <h2>This is welcome page</h2>
            <Route path='/welcome/new-user'>
                <h3>Welcome to the new user!</h3>
            </Route>
        </section>
    )
}

export default Welcome;