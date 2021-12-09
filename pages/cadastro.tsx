import Link from 'next/link';
import { useRouter } from 'next/router';
import "animate.css";

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import React, { useEffect, useRef, useState, useContext } from 'react';

import Input from '../components/form/input/input';

import InputMask from "react-input-mask";

//interfaces 
import { User } from '../src/interfaces/user';

//context
import { UsersContext } from '../src/contexts/userContext'

export default function CadastroPage() {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);
  const [nomeInput, setNome] = useState("");
  const [emailInput, setEmail] = useState("");
  const [cpfInput, setCpf] = useState("");
  const [telefoneInput, setTelefone] = useState("");
  const [disabledButton, setDisabled] = useState(true);

  const { state, dispatch } = useContext(UsersContext);

  function handleSubmit(user: User) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Por favor, digite seu nome.'),
        email: Yup.string().email('Por favor, digite um email válido').required('Por favor, digite seu e-mail.'),
        cpf: Yup.string().matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Digite um cpf válido').required('Por favor, digite seu cpf.'),
        phone: Yup.string()
          .matches(
            /(\(\d{2}\) \d\d{4}-\d{4})/,
            'Digite um Telefone válido.',
          ).required('Por favor, digite um telefone'),
      })
      schema.validate(user, {
        abortEarly: false
      })

      formRef.current?.setErrors({});

      const cadastroCpfFiltrado = state.users.find((cadastro: User) => cadastro.cpf === user.cpf);

      if (!cadastroCpfFiltrado) {
        dispatch?.({ type: 'NewUser', payload: user })
        // router.replace('/');
      } else {
        if (cadastroCpfFiltrado !== undefined) {
          formRef.current?.setFieldError('cpf', 'Cpf já cadastrado')
        }
      }
    }
    catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: Record<string, string> = {}

        err.inner.forEach((error: any) => {
          errorMessages[error.path] = error.message;
        })

        formRef.current?.setErrors(errorMessages);
      }
    }
  };

  useEffect(() => {
    if (nomeInput && emailInput && cpfInput && telefoneInput) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nomeInput, emailInput, cpfInput, telefoneInput])

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>

        <div className="bg"></div>

        <div className="box-right">
          <h1 className="headline1-light animate__animated animate__fadeInDown">Lean Cadastro</h1>
          <div className="form-content animate__animated animate__fadeInRight ">
            <Form method="post" ref={formRef} onSubmit={handleSubmit} >
              <Input id="name" type="text" name="name" label="Nome Completo" onChange={(e: any) => setNome(e.target.value)} />

              <Input id="email" type="email" name="email" label="E-mail" onChange={(e: any) => setEmail(e.target.value)} />

              <InputMask mask="999.999.999-99" onChange={(e: any) => setCpf(e.target.value)}>
                {(inputProps: any) => <Input id="cpf" type="text" name="cpf" label="CPF" {...inputProps} />}
              </InputMask>

              <InputMask mask="(99) 99999-9999" onChange={(e: any) => setTelefone(e.target.value)}>
                {(inputProps: any) => <Input id="phone" type="text" name="phone" label="Telefone" {...inputProps} />}
              </InputMask>

              <div className="flex-bottom">
                <button type="submit" className="bt" disabled={disabledButton}>Cadastrar</button>
                <Link href="/">
                  <a>
                    Login
                    <img src="/images/right-arrow.png" />
                  </a>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
};