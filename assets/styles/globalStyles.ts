import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});