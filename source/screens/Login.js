import React, { Component } from 'react';
import {
    Container, Header, Content, Form, Item, Input, Label, Button, Toast
} from 'native-base';

export default class Login extends Component {

    login()
    {
        Toast.show({text:"Trying to logging you in..."})
    }

    render() {
        return (
            <Container>
                <Header >
                    <Label>Login into your Account</Label>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Repeat Password</Label>
                            <Input />
                        </Item>
                        <Button
                        onPress={this.login()}
                            title={"Login"} >
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
