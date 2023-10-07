import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Button from '../components/Button';

const LeaderDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("StudentList")}
        >
          Student List
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