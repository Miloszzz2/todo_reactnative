import React, { useState, useContext } from 'react';
import { Text, Button, View, Pressable, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TasksContext } from '../Home.js';
function Items() {
  const [checked, setChecked] = useState(false);
  const { tasks, setTasks } = useContext(TasksContext);

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
        {tasks &&
          tasks.map((item) => {
            return (
              <BouncyCheckbox
                style={{ marginTop: 16, borderRadius: 10 }}
                iconStyle={{
                  borderRadius: 10,
                }}
                innerIconStyle={{ borderRadius: 10, borderWidth: 4 }}
                textStyle={{
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 20,
                }}
                fillColor='black'
                isChecked={checked}
                text={item.task}
                key={item.id}
                disableBuiltInState
                onPress={() => (checked ? setChecked(true) : setChecked(true))}
              />
            );
          })}
      </View>
    </View>
  );
}

export default Items;
