import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';

import {Card, ActivityIndicator} from 'react-native-paper';

const Burger = ({isOpen, onPress}) => {
  const [animatedValue] = React.useState(
    () => new Animated.Value(isOpen ? 1 : 0),
  );
  const currentAnimation = React.useRef(null);

  React.useEffect(() => {
    currentAnimation.current?.start();
    currentAnimation.current = Animated.timing(animatedValue, {
      toValue: isOpen ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    });
    currentAnimation.current.start();
  }, [animatedValue, isOpen]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={styles.burger}>
        <Animated.View
          style={[
            styles.item,
            {
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            },
          ]}
        />

        <Animated.View style={{position: 'relative'}}>
          <Animated.View
            style={[
              styles.item,
              {
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [2, 2],
                    }),
                  },
                  {
                    rotate: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg'],
                    }),
                  },
                ],
              },
            ]}
          />

          <Animated.View
            style={[
              styles.item,
              {
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-2, -2],
                    }),
                  },
                  {
                    rotate: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '-45deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.item,
            {
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100],
                  }),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function AnimatedBurger() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Card style={{width: '80%', height: '80%'}}>
        <Burger
          isOpen={isOpen}
          onPress={() => setIsOpen(prevState => !prevState)}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  burger: {
    alignSelf: 'flex-end',
    paddingVertical: 14,
    paddingHorizontal: 7,
    width: 74,
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  item: {
    width: 60,
    height: 4,
    backgroundColor: '#9544C3',
    borderRadius: 45,
  },
});
