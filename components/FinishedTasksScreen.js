import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TasksContext } from '../App';
import { useContext } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ScrollView } from 'react-native';

function FinishedTasks() {
  const { finishedTasks } = useContext(TasksContext);
  return (
    <SafeAreaView
      style={{
        paddingLeft: 40,
        paddingTop: 30,
        paddingBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontFamily: 'Poppins_600SemiBold',
          marginBottom: 10,
        }}
      >
        Finished Tasks
      </Text>
      <ScrollView>
        {finishedTasks &&
          finishedTasks.map((item) => {
            return (
              <BouncyCheckbox
                key={item.id}
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                }}
                iconStyle={{
                  borderRadius: 10,
                }}
                innerIconStyle={{ borderRadius: 10, borderWidth: 4 }}
                textStyle={{
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 20,
                }}
                fillColor='black'
                isChecked={true}
                disableBuiltInState
                text={item.task}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FinishedTasks;
