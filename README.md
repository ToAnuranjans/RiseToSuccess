```
npm install react-native-elements
```

```
npm install react-native-vector-icons
```
```
npm install react-native-safe-area-context
```

It is required to add the SafeAreaProvider to the outside of the app. The suggested way to do this is the following:

```
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return <SafeAreaProvider>...</SafeAreaProvider>;
}

```