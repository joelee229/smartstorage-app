import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8
    },

    item: {
        width: '100%',
        marginLeft: 0,
        paddingLeft: 16
    },

    itemLabel: {
        color: '#979797',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        marginLeft: -16
    }
});

export default styles;