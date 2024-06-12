import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from './useLogin'

function LoginForm() {
  const [email, setEmail] = useState("211410740@gmail.com");
  const [password, setPassword] = useState("12345678");

  const { login, isLoading } = useLogin(); 

  function handleSubmit(e) {
    e.preventDefault();
    console.log('LogicForm email password ', email, password);
    if(!email || !password) return;
    login({email, password}, {
      onSettled: () => {
        setEmail('');
        setPassword('');
      }
    }
  );
}

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>


      <FormRowVertical>
        <Button size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
