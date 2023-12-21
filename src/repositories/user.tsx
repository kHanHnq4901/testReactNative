//https://randomuser.me/api
import axios from 'axios';

const SERVER_NAME = 'randomuser.me';

interface User {
  dateOfBirth: string;
  email: string;
  gender: string;
  userId: string;
  address: string;
  name: string;
  username: string;
  url: string;
  phone: string;
  registeredDate: string;
}

const getUserDetails = async () => {
  try {
    const response = await axios.get(`https://${SERVER_NAME}/api`);
    if (response.status !== 200) {
      throw new Error('Failed to get user details');
    }
    if (response.data.results.length > 0) {
      const userData = response.data.results[0];
      const user: User = {
        dateOfBirth: userData.dob.date,
        email: userData.email,
        gender: userData.gender ?? 'male',
        userId: `${userData.id.name}${userData.id.value}`,
        address: `${userData.location.state}, ${userData.location.city}, ${userData.location.country}`,
        name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
        username: userData.login.username,
        url: userData.picture.large,
        phone: userData.phone ?? '',
        registeredDate: userData.registered.date,
      };

      return user;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const login = ({ email, password }: { email: string; password: string }) => {
  // Xử lý đăng nhập
};

export default {
  getUserDetails,
  login,
};