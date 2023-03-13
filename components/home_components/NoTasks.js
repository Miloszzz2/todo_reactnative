import { Text, View } from 'react-native';
import Animated, {
  FadeOut,
  SlideInLeft,
  SlideOutRight,
} from 'react-native-reanimated';
function NoTasks(props) {
  return (
    <>
      {props.tasks.length === 0 ? (
        <Animated.Text
          entering={SlideInLeft.delay(400)}
          exiting={SlideOutRight}
          style={{
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 20,
          }}
        >
          Brak zadań
        </Animated.Text>
      ) : (
        ''
      )}
    </>
  );
}

export default NoTasks;
