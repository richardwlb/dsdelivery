import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90, // Ja entende que é PIXELS
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: '#FFF',
        fontFamily: 'OpenSans_700Bold',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 25,
        letterSpacing: -0.24,
        marginLeft: 15
    }
});

export default styles;