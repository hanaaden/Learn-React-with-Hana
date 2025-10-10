
---

#  Understanding the Todo App Step-by-Step

---

### 1 Importing what we need

```tsx
import { useEffect, useState } from "react";
```

This line brings two special tools from React:

* **`useState`** – lets your component *remember things* between re-renders (like a variable that stays alive when the UI updates).
* **`useEffect`** – lets you run *side effects*, like saving or reading data from `localStorage`.

Think of it like this:
 `useState` = memory inside your component
 `useEffect` = actions that react to changes or run when the component first appears

---

### 2️⃣ Creating the component

```tsx
function Todo() {
```

This defines your **Todo component** — a small, reusable piece of UI.
Every time React re-renders it, this function runs again, producing updated HTML (JSX) based on the current state.

---

### 3 Creating memory for todos and input

```tsx
const [todos, setTodos] = useState<string[]>([]);
const [task, setTask] = useState('');
```

These two lines are *your app’s brain*.

* `todos` → holds the list of all your tasks.
* `setTodos` → a button that tells React, “Hey, update the todos.”
* `task` → the text currently typed in the input box.
* `setTask` → updates that text whenever the user types.

 When you type something, `setTask` updates the value.
 When you click Add, `setTodos` adds a new item and React re-renders to show it.

---

### 4 Loading saved todos when the app starts

```tsx
useEffect(() => {
  const stored = localStorage.getItem('todos');
  const storedTodos = stored ? JSON.parse(stored) : [];
  if (storedTodos) {
    setTodos(storedTodos);
  }
}, []);
```

This block runs **only once** when the app starts (`[]` means “run only once”).

Here’s what happens:

1. It looks inside the browser’s storage (`localStorage`) for something saved under `'todos'`.
2. If it finds something, it turns that string back into an array using `JSON.parse`.
3. If nothing is found, it just uses an empty array.
4. Then it sets your app’s `todos` to whatever was found — so your old tasks reappear automatically.

 Think of `localStorage` as your app’s *mini database* that remembers things even after refreshing.

---

### 5 Saving todos whenever they change

```tsx
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

This second effect watches the `todos` array.
Every time it changes (add/remove), React automatically runs this code.

* It saves the array as a JSON string inside the browser.
* That’s why your tasks stay saved between page reloads.

 First effect = load data.
 Second effect = save data.
Together, they make your todos *persistent*.

---

### 6 Adding a new todo

```tsx
const handleAddTodo = () => {
  if (task.trim() !== '') {
    setTodos([...todos, task]);
    setTask('');
  }
};
```

Here’s the logic when you press the **Add** button:

* It checks if `task` is not empty (after trimming spaces).
* If it’s valid, it creates a **new array** with the old todos plus the new one.
* React re-renders with this new array.
* Finally, it resets the input box to empty again.

🪄 The spread operator `...todos` means “copy everything that was already there.”

---

### 7 Removing a todo

```tsx
const handleRemoveTodo = (index: number) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
```

When you click **Remove**, this happens:

* It filters out the todo that matches the index of the clicked button.
* The `_` means “I don’t care about the value, just need the index.”
* Then it replaces the old array with the new filtered one.
* The UI updates automatically, and the item disappears.

This works because React re-renders whenever state changes.

---

### 8 Returning the JSX (the UI part)

```tsx
return (
  <div className="App">
    <header className="App-header">
      <h1>TODO App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </header>
  </div>
);
```

This is what React displays on the screen.

 **Breaking it down:**

* `<input>` → connected to `task` so it always shows what’s typed.
* `onChange` → keeps updating `task` in real-time.
* `Add` button → calls `handleAddTodo`.
* `<ul>` → displays all todos by looping (`map`) through `todos`.
* Each `<li>` → shows the todo text and a Remove button.

Whenever you update state, React automatically re-renders this structure.

---

### 9 Finishing the component

```tsx
export default Todo;
```

This makes your `Todo` component available for other files.
For example, your main app file can use it like this:

```tsx
import Todo from './Todo';

function App() {
  return <Todo />;
}
```

---

# Summary

| Concept          | Meaning                                                             |
| ---------------- | ------------------------------------------------------------------- |
| **useState**     | React’s way to store and update data inside components              |
| **useEffect**    | Runs code at specific times (when component starts or data changes) |
| **localStorage** | Browser’s built-in storage to keep data even after refreshing       |
| **map()**        | Loops over the todo array to display items                          |
| **filter()**     | Removes a specific todo by returning a new array                    |

---


