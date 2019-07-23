import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Card , Header, Form , Subtitle, Icon , Item , Input , CardItem , Text , Button , Label , Spinner , Content , Title , Container , Left , Body , Right, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import _ from 'lodash';


class EmployeeList extends Component{


    componentDidMount(){

        this.props.getListOfEmployees();

    }

    render(){

        return(

            <Container> 
                <Header>
                        <Left>
                        <Button onPress={()=>{ }} transparent>
                            <Icon name='menu' />
                        </Button>
                        </Left>

                        <Body style={{ justifyContent:'center' , flexDirection:'row' }} >

                            <Title> Employee List </Title>
                        </Body> 

                        <Right>
                            <Button transparent onPress={()=>{ Actions.AddEmployee() }}>
                                <Icon name='add'/>
                            </Button>
                        </Right>
                </Header>

                    <Card>

                        <CardItem>

                            <Body>

                            <List>

                                { this.props.employeeList.employeeList.length > 0 ? (
                                    <FlatList  
                                    data = { this.props.employeeList.employeeList } 
                                    keyExtractor = { (item) => { item.key } }
                                    renderItem = { (emaployee) => renderListItem(emaployee.item) }
                                    extraData={ this.props.employeeList.employeeList.length }
                                     />
                                ) : (
                                    <Text> No Data Found! </Text>
                                ) 
                                }
                                        
                            </List>

                            </Body>

                        </CardItem>

                    </Card>
            </Container>

        );
    }

}

const renderListItem=(item)=>{

    console.log(item);

    return(

        <ListItem  key={ item.key }>
            <Text> { item.name } </Text>
        </ListItem>
    );

}


const mapStateToProps=(state)=>{

    console.log(state.employeeList);

    return({ employeeList: state.employeeList });

}

export default connect(mapStateToProps,actions)(EmployeeList);