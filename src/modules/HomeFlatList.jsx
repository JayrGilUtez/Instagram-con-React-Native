import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import ContentViwer from './ContentViwer.jsx';


import LofiImage1 from '../../assets/LofiImage1.jpg'
import LofiImage2 from '../../assets/LofiImage2.png'
import LofiImage3 from '../../assets/LofiImage3.jpg'


export default function HomeFlatList() {
    console.log('HomeFlatList rendered');

    const data = [
        { id: 1, description: 'Description 1', source: LofiImage1 },
        { id: 2, description: 'Description 2', source: LofiImage2 },
        { id: 3, description: 'Description 3', source: LofiImage3 }
    ]

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>

                        <ContentViwer
                            userName='Jayr_Gil'
                            source={item.source}
                            description={item.description}

                        />

                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        width: 124,
        height: 124,
        borderRadius: 16
    }
})