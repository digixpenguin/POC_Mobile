import React, { Component } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View,SafeAreaView } from 'react-native'

import Doctor from './Doctor'
import DoctorCell from './DoctorCell'

import styles from './styles/doctors'

class Doctors extends Component {
    constructor(props) {
        super(props);
    }


    _renderItem({ item }){
        return (
            <DoctorCell
            doctor={item}
            onSelectDoctor={this.props.selectDoctor}
        />
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarItemText}>{'Sort By'}</Text>
                    <TouchableOpacity onPress={this.props.orderByName}>
                    <Text style={styles.toolbarItemText}>{'Name'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.orderByNumber}>
                    <Text style={styles.toolbarItemText}>{'Number'}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    numColumns={2} 
                    data={this.props.doctors}
                    renderItem = {this._renderItem.bind(this)}
                />
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.showDoctor}
                    onRequestClose={this.props.showDoctorslist}
                >
                    <Doctor
                        doctor={this.props.doctor}
                        closeModal={this.props.showDoctorslist}
                    />
                </Modal>
            </SafeAreaView>
        )
    }
}

export default Doctors