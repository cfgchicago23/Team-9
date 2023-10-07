import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Button from '../components/Button';

const LeaderDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("StudentProgress")}
        >
          Student List
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("LocalForum")}
        >
          Local Forum
        </Button>
        <Button
          mode="contained"
        >
          Submit Evaluations
        </Button>
        <Button
          mode="contained"
        >
          Start a New Club
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default LeaderDashboard;