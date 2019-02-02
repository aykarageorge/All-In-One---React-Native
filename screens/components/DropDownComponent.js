import React, { Component } from 'react'
import { StyleSheet, View, Text, Picker } from 'react-native';

export default class DropDownBox extends Component {
    state = { item: '' }
    updateItem = (item) => {
        this.setState({ item: item })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dropdown} width={this.props.width}>
                    <Picker
                        selectedValue={this.state.item}
                        onValueChange={this.updateItem} >
                        {this.props.data.map((listItem, index) => { return (<Picker.Item label={listItem} value={index} key={index} />) })}
                    </Picker>
                </View>
                {/* to print selected item from Picker, use below code */}
                {/* <Text>{this.state.item}</Text> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dropdown: {
        height: 45,
        borderColor: 'rgb(247, 190, 4)',
        borderWidth: 4,
        borderRadius: 20,
        justifyContent: 'space-around',
    },
})