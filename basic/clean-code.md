# clean-code-javascript

- 一个函数只做一件事

<Badge text="劣" type="warning" />

```js
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```
<Badge text="优" type="tip" />

```js
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

- 封装条件

<Badge text="劣" type="warning" />

```js
if ((a === 'yes' && !isEmpty(b)) || (c === 'ok')) {

}
```

<Badge text="优" type="tip" />

```js
function shouldCon(a, b, c) {
  return (a === 'yes' && !isEmpty(b)) || (c === 'ok')
}

if (shouldCon(a, b, c)) {}
```