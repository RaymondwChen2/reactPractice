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

function MainContent(){
    return <h1>I'm learning React!</h1>
}

ReactDOM.render(
    <div>
        <MainContent/>
    </div>,
        document.getElementById('root')
)