import { Text, View, Image } from 'react-native'
import styles from './styles/styles'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.Name}> Jeffrey Hernandez </Text>
      <Image source={require('../assets/myImage.jpeg')} />
      <Text style={styles.paragraph}>
        {' '}
        My name is Jeffrey Hernandez and I am an incoming Junior at Animo South
        Los Angeles. I am a person who loves to learn new things and has been
        recently taking on coding with TXT. I want to become a successful person
        who has a good income so that I can sustain myself and my future family.
        My dream job is to work in the physics field. I would love to work with
        NASA or SpaceX in the future.{' '}
      </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}
