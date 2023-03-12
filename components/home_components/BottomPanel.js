import { View, TextInput, Pressable, Text, Keyboard } from 'react-native';
import { useRef, useMemo, useCallback, useState, useContext } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { TasksContext } from '../Home';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

function BottomPanel() {
  const [inputvalue, setInputValue] = useState('');
  const { tasks, setTasks } = useContext(TasksContext);

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['4%', '20%'], []);

  // callbacks

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} pressBehavior={'collapse'} />,
    []
  );
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: '#8075FF' }}
    >
      <BottomSheetView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <TextInput
          value={inputvalue}
          onChangeText={(newText) => {
            setInputValue(newText);
          }}
          style={{
            color: 'white',
            fontSize: 20,
            borderWidth: 3,
            borderColor: 'white',
            width: 300,
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            fontFamily: 'Poppins_600SemiBold',
          }}
        />
        <Pressable
          onPress={() => {
            setTasks([...tasks, { task: inputvalue, id: uuid.v4() }]);
            Keyboard.dismiss();
            bottomSheetRef.current.collapse();
            setInputValue('');
          }}
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            width: 50,
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              margin: 0,
            }}
          >
            +
          </Text>
        </Pressable>
      </BottomSheetView>
    </BottomSheet>
  );
}

export default BottomPanel;
