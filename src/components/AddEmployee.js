import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title , Text , Card, Button, Form, Item, Input, Label, Picker} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddEmployee extends Component {

    render(){

        const { name , phone , shift } = this.props.addEmployee; 

        return(

            <Container>
                <Header>
                    <Left>
    
                        <Button onPress={ ()=>{ Actions.pop() }  } transparent>
    
                            <Icon name="arrow-back" style={Platform.select({android:{ color:'white' },ios:{color:'#64B5F6' }})}/>
    
                        </Button>
    
                    </Left> 
    
                    <Body><Title><Text style={Platform.select({android:{ color:'white' },ios:{color:'black' }})} >Add Employee</Text></Title></Body>
    
                    <Right></Right>
                </Header>
    
                <Card>
                        <Form style={{ padding:8 }}>
    
                            <Item>
                                <Label style={styles.inputLabel}>Name</Label>
                                <Input style={styles.inputField} placeholder="Full Name" placeholderTextColor="#E0E0E0" onChangeText={(newName)=>{ this.props.addEmployeeNameChanged(newName)}} value={ name }/>
                            </Item>
    
                            <Item>
                                <Label style={styles.inputLabel}>Phone</Label>
                                <Input style={styles.inputField} placeholder="Phone" placeholderTextColor="#E0E0E0" onChangeText={(newPhone)=>{ this.props.addEmployeePhoneChanged(newPhone) }} value={ phone }  />
                            </Item>

                            <Item>

                                <Label>Shift</Label>

                                <Picker iosHeader="Shift"  iosIcon={<Icon name="arrow-down"/>} mode='dropdown' selectedValue={shift} onValueChange={(newShift)=>{ this.props.addEmployeeShiftChanged(newShift) }}>

                                    <Picker.Item label="Monday" value="Monday"/>
                                    <Picker.Item label="Tuesday" value="Tuesday"/>
                                    <Picker.Item label="Wednesday" value="Wednesday"/>
                                    <Picker.Item label="Thursday" value="Thursday"/>
                                    <Picker.Item label="Friday" value="Friday"/>
                                    <Picker.Item label="Saturday" value="Saturday"/>
                                    <Picker.Item label="Sunday" value="Sunday"/>

                                </Picker>
                            </Item>
    
                            {/* <Item>
                                <Label style={styles.inputLabel}>Shift</Label>
                                <Input style={styles.inputField}  placeholder="i.e Monday" placeholderTextColor="#E0E0E0" onChangeText={(newShift)=>{ this.props.addEmployeeShiftChanged(newShift) }} value={ shift } />
                            </Item> */}
    
                            <Item>
                                <Button onPress={()=>{this.props.saveEmployeeData(name,phone,shift)}}  style={{ flex:1 , width:null , justifyContent:'center' , marginTop:8}}><Text>Save</Text></Button>
                            </Item>
    
                            <Item>
                                <Button  style={{ flex:1 , width:null , justifyContent:'center' , marginTop:8}}><Text>Text Schedule</Text></Button>
                            </Item>
    
                            <Item >
                                <Button  style={{ flex:1 , width:null , justifyContent:'center' , marginTop:8}}><Text>Fire</Text></Button>
                            </Item>
    
                        </Form>
                        
                </Card>
    
            </Container>
        );

    }

}

const styles = {

    inputField:{

        flex: 3, 
    },inputLabel:{
        flex:1 
    }

}

const mapStateToProps = (state) =>{

    return({

        addEmployee : state.addEmployee

    });
}

export default connect(mapStateToProps,actions)(AddEmployee);