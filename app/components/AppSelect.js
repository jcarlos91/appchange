import React, { Component } from 'react';
import { TouchableOpacity, Platform, View } from 'react-native';
import { Header, Title, Left, Right, Body, Icon, Text, Picker } from 'native-base';
import MyIcon from "./../icon-font";
import styles from "./../assets/newstyles";

const Item = Picker.Item;

export default class AppSelect extends Component {

    constructor(props) {
        super(props);
        const {name} = this.props;
        this.state = {
            [name]: '0',
            counter: 0,
            items: []
        };
    }

    static propTypes = {

    };

    renderItems() {
        this.state.items = [];
        const {component, name, items, isNullable, placeholder} = this.props;
        let componentItems = JSON.parse(JSON.stringify(items));
        if (!isNullable || (placeholder && Object.keys(items).length === 0)) {
            componentItems.unshift({0:placeholder?placeholder:""});
        }

        return componentItems.map((val, index) => {
            let value = Object.keys(val)[0];
            let label = val[value];
            if (this.state.counter === 0 && isNullable) {
                component.state[name] = value;
                if (component.state[name + 'Label'] !== undefined) {
                    component.state[name + 'Label'] = label;
                }
            }
            this.state.counter++;
            this.state.items.push({
                label: label, value: value
            });
            return <Item key={value} label={label} value={value}/>
        });
    }

    _handleChange(value, key){
        const {component, items} = this.props;
        if (component.state[name+'Label'] !== undefined) {
            if(items[value] !== undefined) {
                component.state[name + 'Label'] = this.state.items[key].label;
            } else {
                component.state[name + 'Label'] = '';
            }
        }
        component.setState({[name]: value});
    }

    render() {
        const {title, component, name, disabled, label, mode, placeholder, onFocus, onChange,onValueChange, onBlur,style,textStyle, txtError } = this.props;
        let items = this.renderItems();
        return (
            <View>
                <View>
                    <Text style={[styles.tg_1624m_363]}>{title}</Text>
                </View>
                <View style={[(txtError === '' ? styles.input_box : styles.input_box_E14)]}>

                    <Picker
                        renderHeader={backAction =>
                            <Header style={{ backgroundColor: "#ddd" }}>
                                <Left>
                                    <TouchableOpacity style={{paddingLeft:10}} transparent onPress={backAction}>
                                        <MyIcon
                                            name={'close'}
                                            size={16}
                                            color={'#333'}
                                        />
                                    </TouchableOpacity>
                                </Left>
                                <Body style={{ flex: 3 }}>
                                    <Title style={{ color: "#333" }}>{title}</Title>
                                </Body>
                                <Right />
                            </Header>
                        }
                        iosIcon={<IosIcon />}
                        enabled={!disabled}
                        iosHeader="Selecciona"
                        headerTitleStyle={{color:'#FFF'}}
                        headerBackButtonText='<'
                        headerBackButtonTextStyle={{fontSize:32, paddingTop:18, fontWeight:'300' }}
                        mode={mode?mode:"dropdown"}
                        placeholder={placeholder}
                        selectedValue={component.state[name]}
                        onValueChange={onValueChange?onValueChange:this._handleChange}
                        onFocus={onFocus?onFocus:() => {}}
                        onChange={onChange?onChange:() => {}}
                        onBlur={onBlur?onBlur:() => {}}
                        style={{
                            width: Platform.OS === 'ios' ? '90%' : undefined,
                        }}
                        textStyle={{
                            paddingLeft: Platform.OS === 'ios' ? 0 : 0,
                            paddingRight: Platform.OS === 'ios' ? 0 : 0,
                            maxWidth: Platform.OS === 'ios' ? '100%' : undefined,
                        }}
                        placeholderStyle={{
                            color: "#939393",
                            fontSize:16,
                            paddingLeft:0,
                            maxWidth: Platform.OS === 'ios' ? '100%' : undefined,
                        }}
                        placeholderIconColor="#939393"
                    >
                        {items}
                    </Picker>
                    <View>
                        <Text style={[styles.input_error]}>{txtError}</Text>
                    </View>
                </View>
            </View>

        );
    }
}

class IosIcon extends Component {
    render() {
        return <Icon name="md-arrow-dropdown" style={{ color: "#999", fontSize: 18 }} />
    }
}
