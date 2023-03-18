import { Pressable } from 'react-native';
import { Text, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
function AboutmeScreen() {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <View style={{ flex: 2 }}>
        <Text
          style={{
            fontSize: 32,
            flex: 1,
            paddingBottom: 20,
            textAlignVertical: 'center',
            textAlign: 'center',
            fontFamily: 'Poppins_600SemiBold',
          }}
        >
          About this app
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: '#8075FF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            position: 'relative',
            alignSelf: 'center',
            top: -65,
            borderWidth: 12,
            borderColor: 'white',
            borderRadius: 80,
            width: 125,
            height: 125,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 50,
              backgroundColor: 'white',
              borderWidth: 5,
              borderColor: 'black',
              borderRadius: 80,
              height: '100%',
              width: '100%',
              paddingTop: 8,
              fontFamily: 'Poppins_600SemiBold',
            }}
          >
            M
          </Text>
        </View>

        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontFamily: 'Poppins_600SemiBold',
            textAlign: 'center',
            padding: 0,
            marginTop: -30,
          }}
        >
          This is React Native TodoApp written by me
        </Text>
        <View style={{ marginTop: 40, gap: 15 }}>
          <Pressable
            style={{
              backgroundColor: 'black',
              width: 240,
              paddingVertical: 15,

              borderRadius: 30,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {
              Linking.openURL('https://github.com/Miloszzz2');
            }}
          >
            <AntDesign name='github' size={24} color='white' />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: 'Poppins_600SemiBold',
                alignSelf: 'center',
                fontSize: 17,
                marginLeft: 10,
              }}
            >
              Visit my Github
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#e8594f',
              width: 240,
              paddingVertical: 15,
              borderRadius: 30,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {
              Linking.openURL('mailto: 123@gmail.com');
            }}
          >
            <Ionicons name='mail' size={24} color='white' />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: 'Poppins_600SemiBold',
                alignSelf: 'center',
                fontSize: 17,
                marginLeft: 10,
              }}
            >
              Mail to me
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#6144a6',
              width: 240,
              paddingVertical: 15,

              borderRadius: 30,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {
              Linking.openURL('https://github.com/Miloszzz2');
            }}
          >
            <Ionicons name='timer' size={24} color='white' />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: 'Poppins_600SemiBold',
                alignSelf: 'center',
                fontSize: 13,
                marginLeft: 7,
              }}
            >
              Check my PomodoroApp
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AboutmeScreen;
