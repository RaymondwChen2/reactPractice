// ReactDOM.render(
//     <div>
//         <h1>Fruit List</h1>
//         <ul>
//             <li>Banana</li>
//             <li>Apple</li>
//             <li>Grapes</li>
//         </ul>
//     </div>,
//     document.getElementById('root')
// )


// Render a component ###################################


// function MainContent(){
//     return <h1>I'm learning React!</h1>
// }

// ReactDOM.render(
//     <div>
//         <MainContent/>
//     </div>,
//         document.getElementById('root')
// )


// Creating a nav bar using JSX - using 1 parent ###########

function MainContent(){
    return <h1>I'm learning React!</h1>
}

function NavBar(){
    return (
        <div>
            <h1>Sushi Heaven</h1>
            <nav>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

ReactDOM.render(
    <div>
        <MainContent/>
        <NavBar/>
    </div>,
        document.getElementById('root')
)