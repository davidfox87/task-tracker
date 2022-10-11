import { useState } from 'react'


const AddTask = ({ onAdd }) => {
    //component-level state 
    const [form, setForm] = useState({
        text: "",
        day: "",
        reminder: false,
    }); 
  
    async function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert('Please add a task')
            return
        }

        const newTask = { ...form };
    
        // invoke the backend api to insert record into db
        await fetch("http://localhost:5000/tasks/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
      onAdd(newTask)

      setForm({ name: "", position: "", level: "" });
    }
    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
        </div>

        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Add Day and Time'
                value={day} 
                onChange={(e) => setDay(e.target.value)}
            />
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>

        <input type='submit' value='Save task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
