import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import OrphanageData from '../../screens/CreateOrphanage/OrphanageData';
import SelectMapPostion from '../../screens/CreateOrphanage/SelectMapPosition';
import Map from '../../screens/Map';
import Orphanage from '../../screens/Orphanage';

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Stack.Screen component={Map} name="Map" />
      <Stack.Screen
        component={Orphanage}
        name="Orphanage"
        options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Orfanato" />,
        }}
      />
      <Stack.Screen
        component={OrphanageData}
        name="OrphanageData"
        options={{
          headerShown: true,
          header: () => <Header title="Informe os dados" />,
        }}
      />
      <Stack.Screen
        component={SelectMapPostion}
        name="SelectMapPosition"
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no mapa" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
