import * as React from 'react';
import {useState, useEffect} from 'react'
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  let [stopWatch, setStopWatch] = useState(0)
  const [toggle, setToggle] = useState(false)


  useEffect(()=>{
    let intervalFunc
    if (toggle) {
      intervalFunc = setInterval(()=>{
        setStopWatch(stopWatch=> stopWatch += .1)   
      }, 100)
    }
    return ()=> clearInterval(intervalFunc)
  },
    [toggle]
  )

  const handleChange = () =>{
    setToggle(!toggle)
  }


  

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
      <Text style={styles.timer}>
        stop watch: {stopWatch.toFixed(1)}s
      </Text>
      <Button title={`${toggle? 'Stop' : 'Start'}`} onPress={()=> setToggle(!toggle)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  timer: {
    fontSize: 30
  }
});
