// import * as React from 'react';
// import { StyleSheet } from 'react-native';
//
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
//
// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabOneScreen.tsx" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });

import * as React from 'react';
import { WebView } from 'react-native-webview';

// const runFirst = `
//
// document.body.style.backgroundColor = 'red';
// setTimeout(function() { window.alert('hi') }, 2000);
// true; // note: this is required, or you'll sometimes get silent failures
// `;

export default class App extends React.Component {


  render() {
    const runFirst = `
  document.body.style.backgroundColor = 'red';
  // setTimeout(function() { window.alert('hi') }, 2000);
  true; // note: this is required, or you'll sometimes get silent failures

  setInterval(() => {
    var images = document.getElementsByTagName('img');
var l = images.length;
for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
}
  }, 100)

  var images = document.getElementsByTagName('img');
var l = images.length;
for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
}


setInterval(() => {

var imagesWImage = document.getElementsByTagName('image');
var imagesWImageLength = imagesWImage.length;
for (var i = 0; i < imagesWImageLength; i++) {
    imagesWImage[0].parentNode.removeChild(imagesWImage[0]);
}
}, 100)



`;
    return (
      <WebView
      // source={{
      //     uri: 'https://github.com/react-native-webview/react-native-webview',
      //   }}
        onMessage={(event) => {}}
        injectedJavaScript={runFirst}
        // originWhitelist={['*']}
                source={{ uri: 'https://google.com' }}
        // // source={{ html: '<h1>Hello world</h1>' }}
        // style={{ marginTop: 20 }}
        //  injectedJavaScript={runFirst}
         // injectedJavaScriptBeforeContentLoaded={runFirst}
      />
    );
  }
}
