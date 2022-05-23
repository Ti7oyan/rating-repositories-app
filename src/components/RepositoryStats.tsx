import { StyleSheet, View, Text } from 'react-native';
import { RepositoryStatsType } from '../types/repository';

const parseThousands = (quantity: number) => (
  quantity >= 1000
    ? `${Math.round(quantity / 1000)}k`
    : String(quantity)
);

const styles = StyleSheet.create({
  stats: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },

  value: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title: {
    textAlign: 'center',
  },
});

// Microcomponents

const StatsView = ({ children }: { children: any }) => (
  <View style={styles.stats}>
    {children}
  </View>
);

const StatsTitle = ({ title }: { title: string }) => <Text style={styles.title}>{title}</Text>;

const StatsValue = ({ value }: { value: number }) => (
  <Text style={styles.value}>
    {parseThousands(value)}
  </Text>
);

const Stats = ({ title, value }: { title: string, value: number }) => (
  <StatsView>
    <StatsValue value={value} />
    <StatsTitle title={title} />
  </StatsView>
);

// Main Component

const RepositoryStats = ({
  forks, stars, reviews, rating,
}: RepositoryStatsType) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <Stats title="Forks" value={forks} />
    <Stats title="Stars" value={stars} />
    <Stats title="Reviews" value={reviews} />
    <Stats title="Rating" value={rating} />
  </View>
);

export default RepositoryStats;
