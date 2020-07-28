# Hokodo Bookshelf

_Technical test for the frontend interview @Hokodo._

![hokodo bookshelf project](https://i.giphy.com/kD0KMHlMr1f4xhuFnI.gif)

1. I've started with a simple `create-react-app` which offers all the tools we need to create a production ready React app.
2. I've added some test libraries (as devDependencies) and the react router (to create 2 _routes_ and a _404 page_).
3. I've added a `Dockerfile` and a `Docker compose` file to deploy it easily.

Let's launch it 🚀

---

Via **Docker**:

Running the app – `up` and `build`:

```sh
docker-compose up --build -d
```

Stop the app – `down`:

```sh
docker-compose down
```

---

Via **yarn**:

```sh
cd hokodo-bookshelf
yarn i # install the dependencies
```

Start the app:

```sh
yarn start
```

Build the app:

```sh
yarn build
```

Run the tests:

```sh
yarn test
```
