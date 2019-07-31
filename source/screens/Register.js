import React, { Component } from 'react';
import {
    Container, Header, Content, Form, Item, Input, Label, Button, Toast
} from 'native-base';

export default class LoginScreen extends Component {

    register()
    {
        Toast.show({text:"Trying to register your new account..."})
    }

    render() {
        return (
            <Container>
                <Header >
                    <Label>Register your Account</Label>
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
                        <Item floatingLabel>
                            <Label>Nickname</Label>
                            <Input/>
                        </Item>
                        <Button
                            onPress={this.register()}
                            title={"Register"} >
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
