![image](https://user-images.githubusercontent.com/1544557/31395110-d565a760-ad94-11e7-962f-1777d2def071.png)

# Hello GraphQL
This project is a GraphQL example built with React and based on [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Linux/Mac: Node.js: v6.9+ and NPM v3.x – we recommend using [NVM ](https://github.com/creationix/nvm) 
- Windows: [NVM-Windows ](https://github.com/coreybutler/nvm-windows)

## Getting Started
To get started run the commands below.

```bash
$ git clone git@github.com:vasilijus/graphql-react.git
$ cd graphql-react
$ npm install
$ npm start
```

Then navigate to [http://localhost:3000](http://localhost:3000) in your browser.

GraphQL url: [http://localhost:3100/graphql](http://localhost:3100/graphql)

## Create React App
To learn more about the React portion of this project, go [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Easy Querying
```
{
  allCourses {
    id
  },
  allStudents {
    id, firstName, lastName, active
  }
}
```