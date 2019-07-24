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


                            <Content>

                                { this.props.employeeList.employeeList.length > 0 ? (
                                    <FlatList
                                    style={{ paddingBottom:50 }} 
                                    data = { this.props.employeeList.employeeList } 
                                    keyExtractor = { (item) => { item.key } }
                                    renderItem = { (emaployee) => renderListItem(emaployee.item) } horizontal={ false } showsHorizontalScrollIndicator={ false } showsVerticalScrollIndicator={ false }
                                    extraData={ this.props.employeeList.employeeList.length }
                                     />
                                ) : (
                                    <Text> No Data Found! </Text>
                                ) 
                                }
                                        
                            </Content>


                        </CardItem>

                    </Card>
            </Container>

        );
    }

}

const renderListItem=(item)=>{

    console.log(item);

    return(

        <ListItem  key={ item.key } style={{ marginHorizontal:10 }} onPress={()=>{ Actions.AddEmployee({employee: item})}} >
            <Body>
                <Text > { item.name } </Text>            
            </Body>
        </ListItem>
    );

}


const mapStateToProps=(state)=>{

    console.log(state.employeeList);

    return({ employeeList: state.employeeList });

}

export default connect(mapStateToProps,actions)(EmployeeList);