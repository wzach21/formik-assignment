
import './App.css';
import { useFormik } from 'formik';
function App() {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
       },
      onSubmit: values =>{
        console.log("form:", values);
      },
  validate: values => {
    let errors = {};
    if(!values.email) {
      errors.email = 'Field required.'; 
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
    ) {
          errors.email = 'Username should be email';
        }
    if(!values.password) errors.password = 'Field required.';
    if(!errors.email && !errors.password){window.alert('Loging Succesful!')};
    return errors;
  }
  


  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null} 
        <div>Password</div>
        <input type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null} 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
