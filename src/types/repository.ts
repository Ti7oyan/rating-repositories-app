interface IRepository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

export type RepositoryStatsType = {
  forks: number;
  stars: number;
  reviews: number;
  rating: number;
}

export type RepositoryHeaderType = {
  name: string;
  description: string;
  language: string;
  avatar: string;
}

export default IRepository;
