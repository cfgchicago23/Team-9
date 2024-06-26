import * as React from "react";
import { Button, List } from "react-native-paper";

export default function Lessons({navigation}){
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Lessons" style={styles.container}>
      <List.Accordion
        title="Lesson 1"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item title="Story" />
        <List.Item title="Quiz" />
        <List.Item title="Takeaways" />
      </List.Accordion>

      <List.Accordion
        title="Lesson 2"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Story" />
        <List.Item title="Quiz" />
        <List.Item title="Takeaways" />
      </List.Accordion>

      <List.Accordion
        title="Lesson 3"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Story" />
        <List.Item title="Quiz" />
        <List.Item title="Takeaways" />
      </List.Accordion>

      <List.Accordion
        title="Need Help?"
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Resources" />
        <List.Item title="Contact" />
        <List.Item title="Takeaways" />
      </List.Accordion>

      {/*<Button mode="contained" onPress={() => navigation.navigate('Announcements')}>*/}
      {/*  View Class Announcements*/}
      {/*</Button>*/}
    </List.Section>
  );
};

const styles = {
  container: {
    width: "80%",
  },
};
