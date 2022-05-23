import {
  View, Image, StyleSheet, Text,
} from 'react-native';
import theme from '../theme';
import { RepositoryHeaderType } from '../types/repository';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  image: {
    borderRadius: 10,
    marginStart: 10,
  },

  descriptionContainer: {
    flexDirection: 'row',
  },

  description: {
    flex: 1,
    flexWrap: 'wrap',
    minWidth: 250,
  },

  language: {
    padding: 5,
    color: '#fefefe',
    alignSelf: 'flex-start',
    marginVertical: 5,
    backgroundColor: theme.colors.primary,
    overflow: 'hidden',
    borderRadius: 5,
  },
});

const RepositoryHeader = ({
  name, description, language, avatar,
}: RepositoryHeaderType) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.name}>
        {name}
      </Text>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <Text style={styles.language}>
        {language}
      </Text>
    </View>

    <Image
      source={{ uri: avatar, width: 64, height: 64 }}
      style={styles.image}
    />

  </View>
);

export default RepositoryHeader;
