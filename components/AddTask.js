import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useRef, useMemo, useCallback } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Items from './Items';

function AddTask() {
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['4%', '20%'], []);

  // callbacks

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} pressBehavior={'collapse'} />,
    []
  );
  return (
    <View style={styles.container}>
      <Items />
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
    </View>
  );
}

export default AddTask;
