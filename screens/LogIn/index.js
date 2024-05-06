import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LogInScreen({ navigation }) {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const updateEmail = (value) => {
        setFormData({ ...formData, email: value })
    }

    const updatePassword = (value) => {
        setFormData({ ...formData, password: value })
    }

    const entrar = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={formData.email}
                    onChangeText={updateEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={formData.password}
                    onChangeText={updatePassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Entrar' onPress={entrar}/>
                <Button title='Cadastrar' onPress={() => navigation.navigate('Cadastrar')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform: 'uppercase'
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        justifyContent: 'center',
        gap: 10,
        width: '60%',
    },
});

export default LogInScreen;