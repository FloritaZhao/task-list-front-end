# Wave 01: Setup and Baseline

**Learn Topics: React Components and Props required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `npm install` to install dependencies.
1. Run `npm dev` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End. For this wave you should make sure that that you are on the branch called `wave-01`. You might also need to either commit, stash, or abandon any changes made to the `wave-01` branch to be able to switch back to the main branch.

Read through the code in `App.jsx`, `TaskList.jsx` and `Task.jsx` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
   
   Answer: id, title, isComplete, they come from the Tasklist. 
   These props come from the TaskList component, which loops through the list of tasks and passes each one into a Task component.

2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
    
    Answer: 
    const Task = (props) => {
        const [complete, setComplete] = useState(props.isComplete);
        ...
        {props.title}
    };

3. What `props` does `TaskList` have? Where do they come from?
   
    Answer: TaskList has one prop called tasks, which is an array of task objects. Each object in that array includes id, title, and isComplete.This prop is passed from the App component like this:
    <TaskList tasks={TASKS} />

4. Where is the function `getTaskListJSX` called in `TaskList`?
    - How would the code change without this helper function?
    
    Answer: It is called directly inside the return statement of TaskList
    return (
        <ul className="tasks__list no-bullet">
            {tasks.map((task) => (
                <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
            />
            ))}
        </ul>
    );

5. What component is `TASKS` passed to in `App`?
    - How does the component pass `TASKS`?
    - What element is the component wrapped in?

    Answer: 
    The TASKS array is passed to the TaskList component via the tasks prop.
    through "TaskList tasks={TASKS}" to pass it to tasks in Tasklist
    it's wrapped in <main><div>...</div></main>
    This TaskList component is wrapped inside a <div>, which is inside the <main> section of the App component

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.
