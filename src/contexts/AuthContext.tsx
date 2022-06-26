import { useRouter } from 'next/router';
import { createContext, Dispatch, FormEvent, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

import Cookie from 'js-cookie';
import { addDays } from 'date-fns';

interface AuthContextData {
  handleSignInWithEmailAndPassword: (e: FormEvent) => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  token: string;
  user: UserProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  id: number;
  email: string;
  name: string;
  role: string;
  avatarurl: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const [user, setUser] = useState({} as UserProps);
  
  const handleSignInWithEmailAndPassword = (e: FormEvent) => {
    e.preventDefault();
    if(email != '' && password != '') {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);

      api.post('/login', params, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then((res) => {
        if (res.data.status === true) {
          toast.success('Authenticado com sucesso!');
          Cookie.set('token', res.data.token, {
            expires: addDays(new Date, 1)
          });
          setToken(res.data.token);
          router.push('/app');
        } else {
          toast.error('Email e/ou senha incorretos');
        }
      }).catch((err) => {
        console.log(err);
      })

    } else {
      toast.error('Email e/ou senha incorretos');
    }
  }

  useEffect(() => {
    const tokenCookies = Cookie.get('token');
    api.get('/user', {
      headers: {'Authorization': `Bearer ${tokenCookies}`}
    }).then((res) => {
      setUser(res.data.user);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
    <AuthContext.Provider
      value={{
        handleSignInWithEmailAndPassword,
        setEmail,
        setPassword,
        token,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}