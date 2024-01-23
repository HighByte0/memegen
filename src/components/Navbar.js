import React from "react";
import Main from "./Main";
export default function(props){




    return(
        <div className={props. backgroundColor? "dark": "" } > 

             <ul>
                <li>Developed by Facebook: React was developed by Facebook and released as an open-source project in 2013. It is maintained by Facebook along with a community of individual developers and companies.</li>
                <li>Virtual DOM: One of React's key features is the Virtual DOM, a lightweight in-memory representation of the real DOM. React uses the Virtual DOM to optimize the updating of the actual DOM, making it more efficient and improving performance.</li>
                <li>Component-Based Architecture: React follows a component-based architecture, allowing developers to build UIs by creating reusable and modular components.</li>
                <li>JSX: React uses JSX (JavaScript XML) syntax, which allows developers to write HTML elements and components in a syntax that looks similar to XML or HTML. JSX is then transpiled to JavaScript by tools like Babel.</li>
                <li>Unidirectional Data Flow: React enforces a unidirectional data flow, meaning data changes in a React application follow a one-way path. This helps in maintaining a clear and predictable state management.</li>
                <li>React Hooks: Introduced in React 16.8, Hooks are functions that allow developers to use state and lifecycle features in functional components,</li>
             </ul>
        </div>
    )


}