const parent =React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"hello im h1 of child 1"),
        React.createElement("h2",{},"hello im h2 of child 1"),

    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"hello im h1 of child 2"),
        React.createElement("h2",{},"hello im h2 of child 2"),

    ])
    
]);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
