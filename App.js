import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AnimatedBurger from './src/animations/Burger';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/*<AnimatedBurger />*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
