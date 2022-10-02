// import React, {useState} from 'react'

// const initialState = {
//     name: '',
// }

// function UserForm() {
//     const [formData, setFormData] = useState(initialState)

//     const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})


//     const postData = async () => {
//         const res = await fetch(`https://631d0cc6cc652771a480b5b0.mockapi.io/users`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(formData)
//         })
//         const data = await res.json()
//         console.log(data)
//     }

//     const onSubmit = event => {
//         event.preventDefault()
//         postData()
//     }


//   return (
//     <div>
//         <br></br>
//         <h5><em>New Member</em></h5>
//         <form onSubmit={onSubmit}>
            
//                 <input 
//                     type="text" 
//                     placeholder='name'
//                     name='name'
//                     value={formData.title}
//                     onChange={onChange}
//                 />
            
//                 <input type="submit" />
//         </form>
//         <br></br>
//     </div>
//   )
// }

// export default UserForm