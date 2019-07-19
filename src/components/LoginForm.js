import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Card , Header , Form , Item , Input , CardItem , Text , Button , Label , Spinner , Content , Title , Container , Left , Body , Right} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component{


    onEmailChange = (newEmail) => {

        this.props.emailChanged(newEmail);
    }

    onPasswordChange = (newPassword) => {

        this.props.passwordChanged(newPassword);
    }

    loginUser = () => {

        // const { email , password } = this.props;

        console.log("*** State ***\n"+this.props.email+"\n"+this.props.password);

        this.props.showSpinner(true);

        this.props.loginUser(this.props.email , this.props.password);
    }

    render(){

        return(

            <Container>

            <Header>
                        
                        <Body style={ Platform.select({android:{ flexDirection:'row' , justifyContent:'center' }})} >
                            <Title> Manager App </Title>
                        </Body> 
            </Header>

            <Card>

                <CardItem header style={{ justifyContent : 'center' }}>
                    <Text>LOGIN & REGISTER FORM</Text>
                </CardItem>

                <Form style={{ padding:8 }}>
                    <Item>
                        <Label style={styles.inputLabel} ><Text>Email</Text></Label>
                        <Input placeholderTextColor='#B8B8B8' inlineLabel style={styles.inputField} placeholder="email@something.com" onChangeText={(newEmail)=>{ this.onEmailChange(newEmail) }} value={ this.props.email }/>
                    </Item>

                    <Item>

                        <Label style={styles.inputLabel}><Text>Password</Text></Label>

                        <Input style={styles.inputField} placeholderTextColor='#B8B8B8' textContentType="password" placeholder="Password" secureTextEntry={true} onChangeText={ (newPassword)=>{this.onPasswordChange(newPassword)} } value={this.props.password}/>
                    </Item>

                    { this.renderErrorMessage() }

                    <Item>
                    { this.renderEnterButton() }
                    </Item>

                </Form>

            </Card>

            </Container>
        );
    }

    renderErrorMessage = () => {

         const { error } = this.props

        return(
            
            error ? (

                <Item style={{ justifyContent:'center' , padding:8 }}>
                    <Title><Text numberOfLines={2} style={styles.errorMessage} > { error.message } </Text></Title>
                </Item>

            ) : (

                <Content></Content>
            )
        )

    }

   renderEnterButton = () =>{

        return(

            this.props.loading ? (

                <Content>

                    <Spinner color="blue"/>

                </Content>
            ) : (
                <Button onPress={()=>{ this.loginUser() }} style={{ flex:1, width:null , justifyContent:'center' , marginTop:8 }}><Text>Enter</Text></Button>
            )
        );

    }

}

const mapStateToPropos = ({ auth }) => {

    return({

        email : auth.email , password : auth.password , loading : auth.loading , error : auth.error

    });

}

const styles = {

    inputField:{

        flex: 3, 
    },inputLabel:{
        flex:1
    },errorMessage:{

        color:'red', fontSize: 15,
    }

}

export default connect(mapStateToPropos,actions)(LoginForm);