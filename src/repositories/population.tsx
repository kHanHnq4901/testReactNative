import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';

const SERVER_NAME: string = 'datausa.io';

interface PopulationData {
  nationId: string;
  nation: string;
  idYear: number;
  year: number;
  population: number;
  slugNation: string;
}

async function getPopulation(drilldowns: string, measures: string): Promise<PopulationData[]> {
  try {
    const urlGetPopulation: string = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`;
    let result: PopulationData[] = [];
    let responseData: AxiosResponse<any> = await axios.get(urlGetPopulation);
    if (responseData.status !== 200) {
      throw 'Failed to get population data';
    }
    if (responseData.data.data.length > 0) {
      responseData.data.data.forEach((item: any) => {
        let myObject: PopulationData = {
          nationId: item['ID Nation'],
          nation: item['Nation'],
          idYear: item['ID Year'],
          year: item['Year'],
          population: item['Population'],
          slugNation: item['Slug Nation'],
        };
        result.push(myObject);
      });
    }
    return result;
  } catch (error) {
    throw error;
  }
}

export default { getPopulation };