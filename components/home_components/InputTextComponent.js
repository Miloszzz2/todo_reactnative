import { Text, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import { TasksContext } from '../TasksContextProvider';
function InputTextComponent({ item }) {
  const { tasks } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const setItemTask = () => {
    taskIndex = tasks.findIndex((task) => task.id == item.id);
    tasks[taskIndex].task = inputValue;
  };
  return (
    <>
      {!isEditing ? (
        <Text
          style={{
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 20,
            marginLeft: 10,
            color: 'black',
          }}
          onPress={() => {
            setIsEditing(true);
          }}
        >
          {item.task}
        </Text>
      ) : (
        <TextInput
          autoFocus={true}
          value={inputValue}
          onChangeText={(newText) => {
            setInputValue(newText);
          }}
          maxLength={20}
          style={{
            color: 'black',
            fontSize: 20,
            width: 300,
            marginLeft: 10,
            fontFamily: 'Poppins_600SemiBold',
            alignSelf: 'center',
            height: 35,
          }}
          onBlur={() => {
            inputValue !== '' ? setItemTask(item.id) : '';
            setIsEditing(false);
            setInputValue('');
          }}
        />
      )}
    </>
  );
}

export default InputTextComponent;
