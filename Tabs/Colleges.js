import { Text, View, FlatList } from 'react-native'
import styles from './styles/styles'

import React, { useState } from 'react'

export default function Colleges() {
  const [colleges, setColleges] = useState([
    { college: 'Stanford University', id: '1' },
    { college: 'California State University, Los Angeles', id: '2' },
    { college: 'University of California, Los Angeles', id: '3' },
  ])

  return (
    <View style={styles.container2}>
      <Text style={styles.Title}>
        {' '}
        My list of colleges that I would like to go to!{' '}
      </Text>

      <FlatList
        data={colleges}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.college}</Text>
        )}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}