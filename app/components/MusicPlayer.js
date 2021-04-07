import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const audioBookPlaylist = [
    {
      title: 'Hamlet - Act I',
      author: 'William Shakespeare',
      source: 'Librivox',
      uri:
        'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
    }
  ]

class MusicPlayer extends React.Component {
    state = {
        isPlaying: false,
        playbackInstance: null,
        currentIndex: 0,
        volume: 1.0,
        isBuffering: false
      }
      render() {
        return (
            <View style={styles.container}>
            <Image
              style={styles.albumCover}
              source={{ uri: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg' }}
            />
            <View style={styles.controls}>
              <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                <Ionicons name='play-skip-back' size={48} color='#444' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                {this.state.isPlaying ? (
                  <Ionicons name='ios-pause' size={48} color='#444' />
                    ) : (
                  <Ionicons name='play-circle' size={48} color='#444' />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.control} onPress={() => alert('')}>
                <Ionicons name='play-skip-forward' size={48} color='#444' />
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 250,
        height: 250
    },
    controls: {
        flexDirection: 'row'
    },
    control: {
        margin: 20
    }
})

export default MusicPlayer;