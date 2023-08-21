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
        marginTop: 20,
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
    homepageContainer: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'black'
    },
    homepageHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'50%',
    },
    card: {
        backgroundColor: 'black', // Change to black background color
        padding: 16,
        border: '1px solid white',
        borderWidth:10,
        borderRadius: 8,
        marginBottom: 20, // Increase spacing between cards
        shadowColor: 'white', // Change to white shadow color
        shadowOffset: {
            width: 0,
            height: 4, // Increase shadow offset vertically
        },
        shadowOpacity: 0.5, // Increase shadow opacity
        shadowRadius: 6, // Incrrease shadow radius
        elevation: 8, // Increase elevation for Android shadow
        width: '100%', // Default width for mobile
    },
    cardsContainer: {
        flexDirection: 'row', // Horizontal layout
        flexWrap: 'wrap', // Allow multi-row
        justifyContent: 'space-between',
    },
    cardTitle: {
        color:'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardInfo: {
        color: 'white',
    },
    textInput: {
        borderWidth: 1, // Add border
        borderColor: 'white', // White border color
        color: 'white', // White text color
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        height: '25%',
      }
});
