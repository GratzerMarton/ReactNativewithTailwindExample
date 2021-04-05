import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import tailwind from 'tailwind-rn';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([{ id: "2" }]);

  useEffect(() => {
    const getMoviesFromApiAsync = async () => {
      try {
        let response = await fetch('https://reactnative.dev/movies.json');
        let json = await response.json();
        setData(json.movies);
        setLoading(false);
        console.log(json.movies
        );
      } catch (error) {
        console.error(error);
      }
    };

    getMoviesFromApiAsync();
  }, []);

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-600 font-semibold')}>
            Hello Tailwind
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList

            style={tailwind('p-2 mt-10 w-4/5 bg-blue-100 rounded-lg ')}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item, index }) => (
              <View style={tailwind('w-full flex flex-row items-center p-2')}><Text style={tailwind('font-bold text-black')}>{index + 1}.</Text><Text style={tailwind("  font-bold text-gray-600")}>   {item.title} {item.releaseYear}</Text></View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
