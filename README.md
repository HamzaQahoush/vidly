`import 'bootstrap/dist/css/bootstrap.css'`
`import 'font-awesome/css/font-awesome.css'`
`imrc` import react component
`cc` create class

JSX : javascript XML
Babel : compile jsx -> language
Browser can understand ( react element )

## Bootstrap

- `npm i bootstrap@4.1.1 `
- in index.js `import 'bootstrap/dist/css/bootstrap.css' `

## create react-app :

- npm rm -g create-react-app
- npm install -g create-react-app
- npx create-react-app my-app

when creating components :
` import React, { Component } from 'react';`

- whenever we are using the map method to render a list of item , for each item we need to set key attribute.

- arrow function inherit `this`

* `setState` is used to update the view when we edit the attruibute in child class which is inherited from react
  `this.setState({count : this.state.count+1})`.

* every react components has a property called `probs` and its plain javascript object that include all attributes that we set in component.

* state : include data or local or private component , other component CANNOT access the state

* probs : include data that we give to other component . for READ ONLY.

* controlled component : receives all the data via props and raises events whenever data need to be changed , Entirely controlled by it's parent.

* modifying the state directly in FORBIDEN in react.
* clone the counter at given location 'index' so will have differnet object that the one in state.

* `sfc` -> create functional component
* `cc` -> create class component
* we can use functional component for stateless component instead of class and take `props` as an argument.

## lifecycles

- components go through a few phases during their lifcycle :

1. mounting phase : when the instanace of a component is created and inserted into dom .

- life cycle hooks : allow us to hook in certian moments during life cycle of component and do something.

- Mount have 3 cycle hooks: Constructor , render , componentDidMount , react willl call these method in order.

* Constructor : is called once and the right place to initalize thr properties in this class.

* componentDidMount : method is called AFTER our component is renderd it's perfect make AJAX call to get data from server.
* stateless functional

2.  <b>update phase </b> : when the state or the props of a component get changed

- we have two lifecycle hooks render, componentDidUpdate these two methods are call in order.

3. Unmount : when a component is removed from the dom

- with PropTypes - type checking  
  `npm i prop-types@15.6.2 `

* `_.get(object, path, [defaultValue])` , Arguments
  object (Object) − The object to query.

path (Array|string) − The path of the property to get.

[defaultValue] (\*) − The value returned for undefined resolved values.

- `_.range()`// lodash

# Routing

- `npm i react-router-dom@4.3.1`
- wrap app in index.js `import {BrowserRouter} from 'react-router-dom'`

* register our route on app.js and `import {Route, Switch} from react-route-dom `

* instead of using `href`
  we use `<Link to = "/" </Link`
  imported by ` import Link from "react-router-dom"`

* if we want to send props via Route use render method and send it via props :
  ` render={(props) => <Products sortedBy="newest" {...props} />}`

* we can reach the id in link by props.match.params.id

* to make optional parameters in routes : append `?` to the route
  `path="/posts/:year?/:month? `

* query string is what we append to url using `?` `npm i query-string@6.1.0` to parse the url .
* import queryString from "query-string";

* we can use redirect to make route move from route to another route. we import it from react-router-dom

* every react component have history object from console. we can access it from props
  push : add new address in browser histroy to redirect after click i.e | replace : replace the link you cannot back for it.

# Forms

- when build a form we need to add handler to prevent default behavior when submiting the from
  `<form onSubmit= {this.handleSubmit } >`

-

```
handleSubmit = e=>{
e.preventDefault()
}
```

- to acces the data in form we need to use refs.
  `username= React.createRef()`

and then pass `<input ref={this.username}> `

- to set focus on any input field `autoFocus`
