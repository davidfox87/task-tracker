import { useState } from 'react'




const AddTask = ({ onAdd }) => {
    //component-level state 
    const [form, setForm] = useState({
        text: "",
        day: "",
        reminder: false,
    }); 

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
  
    async function onSubmit(e) {
        e.preventDefault();

        if (!form.text) {
            alert('Please add a task')
            return
        }

        const newTask = { ...form };
    
        // invoke the backend api to insert record into db
        await fetch("http://localhost:8080/tasks/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

      onAdd(newTask);

      setForm({ name: "", position: "", level: "" });
    }
    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' 
                value={form.text} 
                onChange={(e) => updateForm({ text: e.target.value })}
            />
        </div>

        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Add Day and Time'
                value={form.day} 
                onChange={(e) => updateForm({ day: e.target.value })}
            />
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
                checked={form.reminder}
                value={form.reminder} 
                onChange={(e) => updateForm({ reminder: e.target.value })}
            />
        </div>

        <input type='submit' value='Save task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
