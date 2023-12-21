import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart,
        BarChart,
        PieChart,
        ProgressChart,
        ContributionGraph,
        StackedBarChart
} from 'react-native-chart-kit'
import {
  population as PopulationRepository,
  user as UserRepository,
} from '../../repositories/index';
import {convertDateTimeToString} from '../../util/datetime';
import { Dimensions } from "react-native";

function Population (props:any) {
  //PopulationRepository.getPopulation('Nation','Population');
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF", // Màu nền gradient từ trên xuống dưới
    backgroundGradientFromOpacity: 1, // Độ mờ của màu nền gradient từ trên xuống dưới
    backgroundGradientTo: "#FFFFFF", // Màu nền gradient từ dưới lên trên
    backgroundGradientToOpacity: 1, // Độ mờ của màu nền gradient từ dưới lên trên
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Màu chữ và đường viền
    strokeWidth: 2, // Độ dày của đường viền, tùy chọn, mặc định là 3
    barPercentage: 0.5, // Tỷ lệ chiều rộng của các thanh bar, tùy chọn, mặc định là 0.5
    useShadowColorFromDataset: false // Sử dụng màu bóng từ dữ liệu, tùy chọn
  };
  const screenWidth = Dimensions.get("window").width;
  interface PopulationData {
    year: string;
    population: number;
  }
  
  const [Populations, setPopulations] = useState<PopulationData[]>([]);
  
  useEffect (() => {
    PopulationRepository.getPopulation('Nation','Population').then((repositoryPopulation:any) => {
      if(repositoryPopulation){
        setPopulations(repositoryPopulation)
      }
    })
  }, []) // Thêm một mảng rỗng như là tham số thứ hai của useEffect, để chỉ chạy một lần duy nhất sau khi component được render
  const populationLabels = Populations.map(item => item.year).reverse();
const populationData = Populations.map(item => Math.floor(item.population/100000)).reverse();
console.log(populationLabels, populationData)
  return (
    <View>
      <Text>
        {JSON.stringify(Populations)} 
        Biểu đồ 
      </Text>
      <LineChart
       data={{
        labels: populationLabels,
        datasets: [
          {
            data:populationData,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Dân số"]
      }}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      // Đưa legend vào trong object data
      />
    </View>
  );
};
export default Population;