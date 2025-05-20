import React, {useRef, useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Video} from 'expo-av'

export default function App(){
  const video = useRef(null)
  const [status, setStatus] = useState({})

  return(
    <View style = {styles.container}>
      <Video
        ref={video} 
        style={styles.video}
        source={{
          uri:'https://www.w3schools.com/html/mov_bbb.mp4',
        }}
        useNativeControls
        resizeMode = "contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style = {styles.buttons}>
          <TouchableOpacity
            style = {styles.button}
            onPress={() => video.current.playAsync()}
            >
              <Text style = {styles.buttonText}>PLAY</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress={() => video.current.pauseAsync()}
            >
              <Text style = {styles.buttonText}>PAUSE</Text>
            </TouchableOpacity>
        </View>
        <Text style = {styles.status}>
          {status.isPlaying ? 'Reproduzindo...' : 'Pausado'}
        </Text>
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddinf: 20,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
})