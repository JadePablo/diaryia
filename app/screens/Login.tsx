import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { ActivityIndicator } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { signIn, signUp } from '../../utils/authFunctions';
import { styles } from '../../assets/styles/globalStyles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await signIn(auth, email, password);
        } catch (error: any) {
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async () => {
        setLoading(true);
        try {
            await signUp(auth, email, password);
            alert('Check your emails');
        } catch (error: any) {
            alert('Sign up failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <Text style={styles.title}>diaryia</Text>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                ></TextInput>

                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                ></TextInput>

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={handleSignIn}
                        >
                            <Text style={styles.buttonText}>login</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="black"
                            onPress={handleSignUp}
                        >
                            <Text style={styles.buttonText}>sign up</Text>
                        </TouchableHighlight>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;
