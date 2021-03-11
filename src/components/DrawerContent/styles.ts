import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 24
    },

    item: {
        // width: '100%',
        marginLeft: 16,
        // paddingLeft: 16
    },

    itemLabel: {
        color: '#979797',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18,
        marginLeft: -16
    }
});

export default styles;