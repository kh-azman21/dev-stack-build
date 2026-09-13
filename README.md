# DevStack Builder 🚀

DevStack Builder is an interactive web application designed to help developers browse, select, and organize their ideal technology stack across frontend, backend, database, and DevOps tools.

---

## 🛠️ Technologies Used

* **React** (Component-based UI architecture)
* **Vite** (Frontend tooling)
* **Tailwind CSS** (Utility-first styling with custom brand gradient themes)
* **React-Toastify** (Notification system for stack interactions)

---

## ✨ Key Features

* **Dynamic Data Rendering**: Fetches and renders technology data dynamically from a JSON file complete with difficulty levels, category tags, ratings, and custom badges.
* **Interactive Stack Builder**: Seamlessly add tools to your personal stack, prevent duplicate additions, and manage items with single or bulk removal options.
* **Responsive Layout & Visual Feedback**: Designed with a sticky mobile navbar (with hamburger menu toggle), custom loading states, and toast notifications.

---

## ❓ React Questions & Answers

### i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML-like markup directly inside JavaScript files. It is used in React because it makes component layout and UI structure clear and easier to write compared to using plain JavaScript functions to create elements.

### ii. What is the difference between props and state?
Props are read-only inputs passed from a parent component down to a child component to supply data. State is internal data managed within a component that changes over time based on user action. When state changes, the component re-renders to display the updated UI.

### iii. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to create and update local state data. In this project, `useState` was used in `App.jsx` to manage the list of selected technologies (`selectedStack`), and in `TechGrid.jsx` to store the fetched technologies array and loading state.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets components handle side effects, such as fetching data from an API or external file. It was needed to fetch data from `technologies.json` right after the component mounted to the screen, ensuring the data loaded automatically on page load without blocking the main render.

### v. Why does every item in a `.map()` list need a unique key prop?
React relies on unique key props to identify which specific items in a list have been changed, added, or removed. This helps React update only the affected elements in the DOM efficiently without needing to re-render the entire list.

### vi. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific elements based on a true/false condition. It was used in `YourStack.jsx` to render an empty box message when no items were selected, or render the stack list once items were added:

```jsx
{count === 0 ? (
  <div className="empty-state-box">Your stack is empty.</div>
) : (
  <div className="selected-items-list">
  {/* List items render here */}
  </div>
)}
### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: The parent passes data downwards by setting custom attributes called props on the child component tag (e.g., <YourStack selectedStack={selectedStack} />).

Child to Parent: The parent passes down a callback function as a prop. The child component executes that function and passes data into it as arguments when an event happens (e.g., onClick={() => onAddStack(tech)}).
