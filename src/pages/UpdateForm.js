import React, {useState} from 'react'

const initialState = {
    id: '',
    name: '',
    email: ''
}

function UpdateForm() {
    const [formData, setFormData] = useState(initialState) 

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const updateData = async () => {
        const res = await fetch(`https://631d0cc6cc652771a480b5b0.mockapi.io/users/${formData.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = event => {
        event.preventDefault()
        updateData()
    }

  return (
    <div>
        <h4><em>New Member Update</em></h4>
        
        <form onSubmit={onSubmit}>
            
                <input 
                    type="text" 
                    placeholder='ID'
                    name='id'
                    value={formData.id}
                    onChange={onChange}
                />
            
           
                <input 
                    type="text" 
                    placeholder='name'
                    name='name'
                    value={formData.name}
                    onChange={onChange}
                />
            
            
                <input 
                    type="email" 
                    placeholder='email'
                    name='email'
                    value={formData.email}
                    onChange={onChange}
                />
            
                <input type="submit" />
        </form>
        <br></br>
        
    <h3><em>Newest Members</em></h3>
    <h5>*Click User to delete</h5>
    </div>

   
  )
}

export default UpdateForm