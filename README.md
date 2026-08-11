# React + Vite

A React + Vite demonstration project featuring several small apps to showcase core React concepts.

React Router is used throughout, with sub-routes in a couple of the apps. The main menu is a component (`NavBar.jsx`) that sits outside the main routes, so it persists across every page.

The opening page displays a grid of images, which can be expanded to a full-size view using conditional rendering (`{condition && <Component />}`).

## Apps

### To Do List
Fetches data asynchronously from an external API, with results viewable in several different formats via reusable components. Items can be added or deleted in each view. Since an external API is used (entries limited to 10), data does not persist to local storage and stays in memory only.

- Hooks: `useEffect`, `useState`
- Reusable components: `Table.jsx`, `Card.jsx`, `ListView.jsx`

### Simple Calculator
A basic calculator that builds up a string expression and evaluates it with `math.js`, making it easy to scale up further.

- Hooks: `useState`
- Reusable components used throughout

### Bank Account Simulation
Uses sub-routes with `useNavigate`, `useState`, and global state via `createContext`/`useContext` (`BankAccountProvider`). Accounts are modeled with a basic JavaScript class, registered to local storage, and logged in via password hashing. Account transactions are tracked, reusing `Table.jsx`. Forms reuse `Field.jsx`.

### Reflections (Personal Diary)
Persists entries to local storage via `useEffect`. `ThoughtCard` supports inline editing directly within the card. Also uses sub-routes.
