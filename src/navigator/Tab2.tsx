import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { useAppSelector } from "../store";
import { RootStackParams } from "./Tab1";

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {

    const { theme } = useAppSelector( state => state.theme );
  
    return (
      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        {/* <NavigationContainer
          theme={ theme }
          independent={ true }
        > */}
          {/* <Tabs /> */}
          <Tab2.Navigator
              screenOptions={{
                  headerShown: false,
                  cardStyle: {
                      // backgroundColor: 'white'
                  }
              }}
          >
            <Tab2.Screen name="HomeScreen" component={ SearchScreen } />
            <Tab2.Screen name="PokemonScreen" component={ PokemonScreen } />
          </Tab2.Navigator>
         
        {/* </NavigationContainer> */}
        
      </View>
    );
  }