import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { AucthLayout } from '../layout/AucthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage} = useSelector( state => state.auth );

  const isCheckingAucthentication = useMemo(() => status === 'checking', [status]);


  const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
    displayName: [ (value) => value.length >=1, 'El nombre es obligatorio'],
  }

  const { 
    isFormValid, displayNameValid, email, password, 
    onInputChange, formState, emailValid, passwordValid 
  } = useForm(formData, formValidations);

  console.log(displayNameValid)

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    if ( !isFormValid ) return; 

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AucthLayout title='Crear Cuenta'>
      <form onSubmit={ onSubmit }>
        <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Marily Gonzalez"
              fullWidth
              name= "displayName"
              value={ displayNameValid }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted}
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="mgsolutions@gmail.com"
              fullWidth
              name= "email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted}
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name= "password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted}
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button 
              disabled={isCheckingAucthentication}
              type='submit'
              variant="contained" 
              fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AucthLayout>
  )
}
