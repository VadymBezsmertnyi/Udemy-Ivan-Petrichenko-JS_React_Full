import { Component} from 'react';
import './employers-list-item.css';

class EmployersListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salary: ''
        }
    }

    /* newSalary = (e) => {
        this.setState((props) =>{
            return {salary: e.target.value}
        });
        console.log(this.props.salary + "=" + this.state.salary);
    } */
    
    render() {
        const { name, salary, onDelete, onToggleProp, increase, star ,newSalary } = this.props

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (star) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp}
                    data-toggle="star">{name}</span>
                <input type="text" className="list-group-item-input"
                    value={salary + "$"}
                    onChange={newSalary} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;