const innerForm = ({ 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
    isSubmitting,
    isValid
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                {touched.password && errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <button type="submit" disabled={!isValid || isSubmitting}>Submit</button>
            </div>
        </form>
    );
}

const Form = Formik.withFormik({
    mapPropsToValues: props => ({ email: '', password: '' }),
    validate: ({ email, password }) => {
        const errors = {};
        if(email === '') errors.email = 'Vazio';
        if(password === '') errors.password = 'Vazio';
        return errors;
    },
    handleSubmit: (values) => {
        console.log(values);
    }
})(innerForm);

render(Form, '#app-form');