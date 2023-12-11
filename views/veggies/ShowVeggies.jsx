const React = require('react');
class ShowVeggies extends React.Component {
    render () {
        const vegetable = this.props.vegetable;

        return (
            <div>
                <h1>Show Page</h1>
                <p>The {vegetable.name} is {vegetable.color}</p>
                {vegetable.readyToEat ? 'It is ready to eat' : "NOT READY!"}
            </div>

        )
    }
}

// git remote set-url origin https://git-repo/new-repository.git
        

module.exports = ShowVeggies;