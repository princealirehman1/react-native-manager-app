import React, { Component } from 'react';
import { Card , Header, Form , Subtitle, Icon , Item , Input , CardItem , Text , Button , Label , Spinner , Content , Title , Container , Left , Body , Right } from 'native-base';
import { Actions } from 'react-native-router-flux';


class EmployeeList extends Component{

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
                <Body>
                    <Card>

                    </Card>
                </Body>
            </Container>

        );
    }

}

export default EmployeeList;