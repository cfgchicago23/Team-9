import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function CustomScrollbar({ children }) {
return (
<View style={{ flex: 1 }}>
<ScrollView
style={styles.scrollable}
showsVerticalScrollIndicator={false} // Hide the default scrollbar
>
{children}
</ScrollView>
<View style={styles.scrollbar} />
</View>
);
}


export default function Announcements() {
const announcements = [
{ date: '2023-10-15', timestamp: '10:00 AM', subject: 'Subject: XYZ', text: 'Some text goes here' },
{ date: '2023-10-15', timestamp: '11:30 AM', subject: 'Subject: XYZ', text: 'Another line of text' },
{ date: '2023-10-16', timestamp: '12:45 PM', subject: 'Subject: XYZ', text: 'Additional text' },
{ date: '2023-10-16', timestamp: '12:45 PM', subject: 'Subject: XYZ', text: 'Additional text' },
{ date: '2023-10-16', timestamp: '12:45 PM', subject: 'Subject: XYZ', text: 'Additional text' },
];


// Sort the announcements by date and time in descending order (most recent first)
announcements.sort((a, b) => {
const dateA = new Date(a.date);
const dateB = new Date(b.date);
return dateB - dateA;
});
// Within each date, sort by time in ascending order (earliest first)
announcements.forEach((announcement) => {
announcement.timesort = new Date(`${announcement.date} ${announcement.timestamp}`);
});
announcements.sort((a, b) => {
return a.date === b.date ? a.timesort - b.timesort : 0;
});


return (
<GestureHandlerRootView style={{ flex: 1 }}>
<View style={styles.container}>
<Text style={styles.headerText}>Recent Announcements!</Text>
<Text style={styles.subHeaderText}>Viewing: Club #1 - Leader</Text>


{/* Scrollable area for boxes */}
<CustomScrollbar>
{/* Render boxes with formatted content */}
{announcements.map((announcement, index) => (
<View style={styles.textBox} key={index}>
<Text style={styles.subject}>{announcement.subject}</Text>
<Text style={styles.text}>{announcement.text}</Text>
<Text style={styles.postedAt}>
Posted at: {announcement.date} <Text style={{ fontWeight: 'bold' }}>|</Text> {announcement.timestamp}{' '}
<Text style={{ fontStyle: 'italic' }}></Text>
</Text>
</View>
))}
</CustomScrollbar>
</View>
</GestureHandlerRootView>
);
}


const styles = StyleSheet.create({
container: {
flexGrow: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'flex-start',
paddingTop: 120,
},
headerText: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
subHeaderText: {
fontSize: 18,
marginBottom: 20,
},
scrollable: {
flex: 1,
width: '100%',
},
scrollbar: {
position: 'absolute',
top: 0,
right: 0,
width: 5, // Adjust the width as needed
backgroundColor: 'rgba(0, 0, 0, 0.5)', // Scrollbar color
borderRadius: 5, // Rounded scrollbar
},
textBox: {
marginVertical: 12,
width: '100%',
paddingVertical: 20,
borderBottomWidth: 1,
borderColor: '#ccc',
marginRight: 100, // You can adjust the right margin as needed
},
subject: {
fontSize: 18, // Adjust the subject font size as needed
fontWeight: 'bold', // Make subject text bold
marginBottom: 4, // Add spacing between subject and text
},
text: {
fontSize: 16, // Adjust the text font size as needed
},
postedAt: {
fontSize: 14, // Adjust the posted at font size as needed
marginTop: 8, // Add spacing between text and date/time
},
});
