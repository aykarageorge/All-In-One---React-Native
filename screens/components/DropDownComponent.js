import PropTypes from 'prop-types';
import React, { PureComponent, StyleSheet } from 'react';
import { Button } from 'react-native-material-buttons';

export default class DropdownItem extends PureComponent {
    static defaultProps = {
        color: 'transparent',
        disabledColor: 'transparent',
        rippleContainerBorderRadius: 0,
        shadeBorderRadius: 0,
    };

    static propTypes = {
        ...Button.propTypes,

        index: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        let { onPress, index } = this.props;

        if ('function' === typeof onPress) {
            onPress(index);
        }
    }

    render() {
        let { children, style, index, ...props } = this.props;

        return (
            <Button
                {...props}

                style={[styles.container, style]}
                onPress={this.onPress}
            >
                {children}
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        borderRadius: 0,
        justifyContent: 'center',
    },
})