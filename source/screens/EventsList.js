import React, { Component } from 'react';
import {
    Container, Header, Content, Form, Item, Input, Label, Button, Toast, Card
} from 'native-base';
import {ListView} from "react-native-web";

export default class EventsList extends Component{
    render(){
        return (
            <Container>
                <Header >
                    <Label>Login into your Account</Label>
                </Header>
                <Content>
                    <Form>
                        <Input/>
                    </Form>
                    <Card scrollEnabled={true}>
                        <CardItem>
                            
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
