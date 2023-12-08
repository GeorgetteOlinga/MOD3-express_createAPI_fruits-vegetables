const React = require('react');

/*

    Nowadays, react components are written as functions, but they used to be only written like this, in the form of a class.

    function MyComponent() {
        return (
            <>
            </>
        )
    }

    class MyComponent extends React.Component {
        render() {
            return (
                <>
                </>
            )
        }
    }

*/

// class NewVeggies extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h1>New vegetable Page</h1>
//                 {/* NOTE: action will be the route, method will be the HTTP verb */}
//                 <form action='/vegetables' method="POST">
//                     Name: <input type="text" name="name" /><br />
//                     Color: < input type="text" name="color"/> <br />
//                     Is Ready to Eat: <input type="checkbox" name="readyToEat"/> <br />
//                     <input type="submit" name="" value="Create Vegetable"/>
//                 </form>
//             </div>
//         )
//     }
// }

function NewVeggies() {
    return (
        <div>
            <h1>New vegetable Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action='/vegetables' method="POST">
                Name: <input type="text" name="name" /><br />
                Color: < input type="text" name="color"/> <br />
                Is Ready to Eat: <input type="checkbox" name="readyToEat"/> <br />
                <input type="submit" name="" value="Create Vegetable"/>
            </form>
        </div>
    )
}

/*
    camelCase
        often used for..
            javascript variables
            javascript functions
    PascalCase
        ...
            classes in javascript
            react components
    kebab-case
            ids and classes in HTML/CSS
    snake_case
            python functions and other things
*/

module.exports = NewVeggies;