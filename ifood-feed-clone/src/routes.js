import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Screens
import MainScreen from '~/pages/Main';
import SearchScreen from '~/pages/Search';
// Custom tabbar component
import CustomFooterTabBar from '~/components/CustomFooterTabBar';
// Tabbar icon sources
import HomeIcon from '~/assets/home.png';
import SearchIcon from '~/assets/search-black.png';
import OrdersIcon from '~/assets/order.png';
import FeedIcon from '~/assets/iconoir_rss-feed.png';
import ProfileIcon from '~/assets/profile.png';

const TabRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: () => HomeIcon,
        tabBarLabel: 'Início',
      },
    },
    Feed: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: () => FeedIcon,
        tabBarLabel: 'Fedd',
      },
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'blue',
        },
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => SearchIcon,
        tabBarLabel: 'Buscar',
      },
    },
    Orders: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => OrdersIcon,
        tabBarLabel: 'Pedidos',
      },
    },
    Profile: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: () => ProfileIcon,
        tabBarLabel: 'Perfil',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarComponent: CustomFooterTabBar,
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#666',
      },
    }),
  },
);

export default createAppContainer(TabRoutes);
