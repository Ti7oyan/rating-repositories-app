import { View, StyleSheet } from 'react-native';
import IRepository from '../types/repository';
import RepositoryStats from './RepositoryStats';
import RepositoryHeader from './RepositoryHeader';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 20,
  },
});

const RepositoryItem = ({
  id, fullName, description, language,
  forksCount, stargazersCount, reviewCount,
  ratingAverage, ownerAvatarUrl,
}: IRepository) => (
  <View key={id} style={styles.container}>
    <RepositoryHeader
      name={fullName}
      description={description}
      language={language}
      avatar={ownerAvatarUrl}
    />

    <RepositoryStats
      forks={forksCount}
      stars={stargazersCount}
      reviews={reviewCount}
      rating={ratingAverage}
    />
  </View>

);

export default RepositoryItem;
