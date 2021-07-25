import React from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {FormControl, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import s from './signupPage.module.css'
import {useFormik} from "formik";





const SignupPage: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cfPassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })



    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Grid container justify="center">
                    <Grid item xs={3}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    <h1>It-incubator</h1>
                                    <h2>Sign up </h2>

                                </FormLabel>
                                <FormGroup>
                                        <TextField
                                            type="email"
                                            label="Email"
                                            margin="normal"


                                            {...formik.getFieldProps('email')}
                                        />
                                    <TextField
                                        type="password"
                                        label="Password"
                                        margin="normal"


                                        {...formik.getFieldProps('password')}
                                    />
                                    <TextField
                                        type="password"
                                        label="Confirm password"
                                        margin="normal"


                                        {...formik.getFieldProps('cfPassword')}
                                    />

                                    <FormGroup style={{display: 'flex', flexDirection: 'row', marginTop: '40px'}}>
                                        <Button
                                            style={{margin: '15px'}}
                                            type={'reset'}
                                            variant={'outlined'}
                                            color={'secondary'}
                                            size={'small'}>Cancel</Button>

                                        <Button
                                            style={{margin: '15px'}}
                                            type={'submit'}
                                            variant={'contained'}
                                            color={'primary'}
                                            size={'small'}>Register</Button>

                                    </FormGroup>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default SignupPage