## GraphQL 入门
> [GraphQL](https://graphql.cn/) 是一种用于 API 的查询语言，是一个使用基于类型系统来执行查询的服务端运行时。

### 简单案例
```js {5,15,33}
let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    me: User
    age: Int
    sex: String
  }
  type User {
    id: ID
    name: String
  }
`);

const root = {
  me: () => {
    return {
      id: 1,
      name: 'Hishion'
    }
  },
  age: () => {
    return 27
  },
  sex: () => {
    return 'male'
  }
};

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
```
![GraphQL 入门案例](/img/graphql-1.png)