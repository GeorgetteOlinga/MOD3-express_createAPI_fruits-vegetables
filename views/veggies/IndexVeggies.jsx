const React = require('react');

class IndexVeggies extends React.Component {
    render() {
        const { vegetables } = this.props;
        // const fruits = this.props.vegetables;

        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/vegetables/${i}`}>
                                    {vegetable.name}
                                </a> {' '}
                                is {vegetable.color} <br></br>
                                {vegetable.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = IndexVeggies

/*
    git init            do this only once
        initializes a repository
    git remote add origin <GITHUB URL>      do this only once
        links your repo to the internet repo
    
    git add .
        stages the changes
    git commit -m ""
        commit message
    git push origin <BRANCH NAME>
        push to github
*/