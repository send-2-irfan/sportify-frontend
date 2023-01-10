import { Form, Field } from 'react-final-form'

const onSubmit = values => {
    // do something with the form values
    console.log(values)
}
const SportsRegistrationForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <Field name="playerName">
                    {({ input, meta }) => (
                        <div>
                            <label>Player Name</label>
                            <input {...input} type="text" placeholder="Player Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="department">
                    {({ input, meta }) => (
                        <div>
                            <label>Department</label>
                            <input {...input} type="text" placeholder="Department" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="semester">
                    {({ input, meta }) => (
                        <div>
                            <label>Semester</label>
                            <input {...input} type="text" placeholder="Semester" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="contactNumber">
                    {({ input, meta }) => (
                        <div>
                            <label>Contact Number</label>
                            <input {...input} type="text" placeholder="Contact Number" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="email">
                    {({ input, meta }) => (
                        <div>
                            <label>Email</label>
                            <input {...input} type="email" placeholder="Email" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="players">
                    {({ input, meta }) => (
                        <div>
                            <label>List of Players</label>
                            <input {...input} type="text" placeholder="Player 1" />
                            <input {...input} type="text" placeholder="Player 2" />
                            <input {...input} type="text" placeholder="Player 3" />
                            <input {...input} type="text" placeholder="Player 4" />
                            <input {...input} type="text" placeholder="Player 5" />
                            <input {...input} type="text" placeholder="Player 6" />
                            <input {...input} type="text" placeholder="Player 7" />
                            <input {...input} type="text" placeholder="Player 8" />
                            <input {...input} type="text" placeholder="Player 9" />
                            <input {...input} type="text" placeholder="Player 10" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <div className="buttons">
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>
                </div>
            </form>
        )}
    />
);


export default SportsRegistrationForm;


