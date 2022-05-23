import {
  FlatList,
} from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repository }) => (
        <RepositoryItem
          id={repository.id}
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
          forksCount={repository.forksCount}
          stargazersCount={repository.stargazersCount}
          reviewCount={repository.reviewCount}
          ratingAverage={repository.ratingAverage}
          ownerAvatarUrl={repository.ownerAvatarUrl}
        />
      )}
    />
  );
}

export default RepositoryList;
