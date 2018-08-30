import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDa4LSqAWNmJ1tQIXzrE-ZB0zOtLl4fzME",
      authDomain: "series-f061c.firebaseapp.com",
      databaseURL: "https://series-f061c.firebaseio.com",
      projectId: "series-f061c",
      storageBucket: "series-f061c.appspot.com",
      messagingSenderId: "241116145602"
    };
    firebase.initializeApp(config);
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }

  tryLogin() {
    this.setState({ isLoading: true, message: '' });
		const { mail: email, password } = this.state;
		
		this.props.tryLogin(email, password);
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        return 'Erro desconhecido';
    }
  }

  renderMessage() {
    const { message } = this.state;
    if (!message)
      return null;

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;
    return (
      <Button
        title="Entrar"
        onPress={() => this.tryLogin()}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder="user@mail.com"
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
           />
        </FormRow>
        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>

        { this.renderButton() }
        { this.renderMessage() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});


export default connect(null, { tryLogin })(LoginPage);