import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';


import LofiImage1 from '../../assets/LofiImage1.jpg'
import LofiImage2 from '../../assets/LofiImage2.png'
import LofiImage3 from '../../assets/LofiImage3.jpg'

export default function ProfileFlatList() {

    const datax = [
        { id: 1, description: 'Description 1', source: LofiImage1 },
        { id: 2, description: 'Description 2', source: LofiImage2 },
        { id: 3, description: 'Description 3', source: LofiImage3 },

    ]

    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={datax}
                numColumns={3}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigator.navigate('ImageScreen', { source: item.source, description: item.description })}

                    >

                        <Image source={item.source} style={styles.image} />


                    </TouchableOpacity>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 414,
        height: 'auto',
        alignItems: 'center',
        //backgroundColor:'orange'
    },
    image: {
        width: 138,
        height: 138,
        borderWidth: 1,
        borderRadius: 0
    }
})