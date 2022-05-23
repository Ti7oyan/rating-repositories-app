import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 24,
  },
});

function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Rating Repositories App
      </Text>
      <RepositoryList />
    </View>
  );
}

export default Main;
