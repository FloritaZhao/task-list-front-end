import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onCompleteToggle, onDeleteTask}) => {
  // const [complete, setComplete] = useState(isComplete);
  const completeButtonClicked = () => {
    onCompleteToggle(id);
  };

  const deleteButtonClicked = () => {
    onDeleteTask(id);
  };


  const buttonClass = isComplete? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // onClick={() => setComplete(!complete)}
        onClick={completeButtonClicked}
      >
        {isComplete ? `${title} - completed` : title}
      </button>
      <button className="tasks__item__remove button"
        onClick={deleteButtonClicked}
      >x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onCompleteToggle: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};


export default Task;
