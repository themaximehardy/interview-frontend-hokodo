# Hokodo Bookshelf

_Technical test for the frontend interview @Hokodo._

![hokodo bookshelf project](https://i.giphy.com/kD0KMHlMr1f4xhuFnI.gif)

### Intro

1. I've started with a simple `create-react-app` which offers all the tools we need to create a production ready React app.
2. I've added some test libraries (as devDependencies) and the react router (to create 2 _routes_ and a _404 page_).
3. I've used React hook (`useState`, `useEffect`, `useMemo` and `Context`).
4. I've added a `Dockerfile` and a `Docker compose` file to deploy it easily.

Let's launch it 🚀

---

### Via **Docker**:

Running the app – `up` and `build`:

```sh
docker-compose up --build -d
```

You can see the app running on http://localhost:3001/

Stop the app – `down`:

```sh
docker-compose down
```

---

### Via **yarn**:

```sh
cd hokodo-bookshelf
yarn # install the dependencies
```

Start the app:

```sh
yarn start
```

You can see the app running on http://localhost:3000/

Build the app:

```sh
yarn build
```

Run the tests:

```sh
yarn test
```

---

### Optimisation and next steps

- Make it responsive and mobile friendly
- Create a search input to find quickly a book
- Now, I'm making only 1 request (when we load the page) but it would be great to have more endpoints depending of the situation (list of books or single book...)
- Write more tests!!
