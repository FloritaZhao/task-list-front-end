import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

const TaskList = ({ tasks, onTaskCompleteToggle, deleteThisTask}) => {
  const taskComponents = tasks.map(task => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        onCompleteToggle = {onTaskCompleteToggle}
        onDeleteTask = {deleteThisTask}
      />
    );
  });

  return <ul className="tasks__list no-bullet">{taskComponents}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskCompleteToggle: PropTypes.func.isRequired,
  deleteThisTask:PropTypes.func.isRequired,
};

export default TaskList;
