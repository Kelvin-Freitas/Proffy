import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    banner:{
        width: '100%',
        //tive que definir height por não estar usando emulador
        //ou expo no mobile, portanto dess forma a img surge no brownser
        height: '30%', 
        resizeMode: 'contain'
    },
    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop:80
    },
    titleBold:{
        fontFamily: 'Poppins_600SemiBold'
    }
});

export default styles;