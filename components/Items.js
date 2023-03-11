import React, { useState } from 'react';
import { Text, Button, View, Pressable, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
function Items() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxPress = () => {
    setChecked((prev) => {
      return !prev;
    });
  };
  return (
    <View style={{ paddingLeft: 40, paddingTop: 30 }}>
      <View>
        <Text
          style={{
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 32,
          }}
        >
          Lista Zadań:
        </Text>
      </View>
      <View style={{ paddingTop: 10, justifySelf: 'flex-start' }}>
        <BouncyCheckbox
          style={{ marginTop: 16, borderRadius: 10 }}
          iconStyle={{
            borderRadius: 10,
          }}
          innerIconStyle={{ borderRadius: 10, borderWidth: 4 }}
          textStyle={{ fontFamily: 'Poppins_600SemiBold', fontSize: 20 }}
          fillColor='black'
          isChecked={checked}
          text='Zadanie1'
          disableBuiltInState
          onPress={() => handleCheckboxPress()}
        />
      </View>
    </View>
  );
}

export default Items;
