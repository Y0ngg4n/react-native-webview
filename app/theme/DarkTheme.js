import React, {Component} from 'react';
import getTheme from '../../native-base-theme/components';

export default class DarkTheme extends Component {
    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Content>

                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}
