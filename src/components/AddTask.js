import { useState } from 'react';
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [info, setInfo] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and date or close the form!'
            })
        } else if (!text && day && info) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text && !day && info) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else {
            onSave({ text, day , info});
        }

        setText('');
        setDay('');
        setInfo('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="description" value={info} onChange={(e) => setInfo(e.target.value)} />
            </div>
            <div className="form-control">
                <label>due_Date</label>
                <input type="text" placeholder="due_Date" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>


            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
