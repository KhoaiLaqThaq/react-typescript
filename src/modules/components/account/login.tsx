import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from "react-redux";
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';

import { login } from './auth.reducer';

export interface ILogin extends StateProps, DispatchProps {

}

const LoginComponent = (props: ILogin) => {
  const formRef = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    props.login(username, password);
  }

  return (
    <div className="container">
      <div className="col-md-12">
        <div className="card card-container">
          <Form
            name="form"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            ref={formRef}
          >
            <Form.Item label={'Username'} name={'username'}
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                }
              ]}
            >
              <Input onChange={onChangeUsername}/>
            </Form.Item>

            <Form.Item label="Password" name="password"
              rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              ]}
            >
              <Input.Password onChange={onChangePassword} />
            </Form.Item>
            
            <Form.Item name={'remember'} valuePropName={'checked'}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type={'primary'} htmlType={'submit'}>Login</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authReducer }) => ({
  message: authReducer.message,
  user: authReducer.user
});

const mapDispatchToProps = {
  login
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default LoginComponent;