import React, { Component } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles/doctor'

class Doctor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let doctor = this.props.doctor;

        return (
            <ScrollView style={styles.modal}>
                <SafeAreaView style={styles.toolbar}>
                    <TouchableOpacity onPress={this.props.closeModal}>
                    <Text style={styles.toolbarItemText}>{'Close'}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                            {`#${doctor.doctorNumber}`}
                        </Text>
                        <Image
                            source={{ uri: doctor.image }}
                            style={styles.thumbnail}
                        />
                    </View>
                    <Text style={styles.text}>{doctor.description}</Text>
                    <Text style={styles.title}>{'Who Played Him:'}</Text>
                    <Text style={styles.text}>{doctor.actor}</Text>
                    <Text style={styles.title}>{'When:'}</Text>
                    <Text style={styles.text}>{doctor.when}</Text>
                    <Text style={styles.title}>{'Memorable Gadget/Item of Clothing:'}</Text>
                    <Text style={styles.text}>{doctor.gadget}</Text>
                    <Text style={styles.title}>{'Reason for Regeneration:'}</Text>
                    <Text style={styles.text}>{doctor.regeneration}</Text>
                    <Text style={styles.title}>{'Three Recommended Stories:'}</Text>
                    <Text style={styles.text}>{doctor.stories}</Text>
                </View>
            </ScrollView>
        )
    }
}

export default Doctor