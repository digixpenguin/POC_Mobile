import { Platform, StyleSheet } from 'react-native'
import Colors from './colors'

const transparent = 'transparent'

export default StyleSheet.create({
    cell: {
        alignItems: 'center',
        margin: 5,
        height: 190,
        width: 160,
    },
    cellTitle: {
        color: Colors.text.highlight.dark,
        fontSize: 16,
        marginTop: 5
    },
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        ...Platform.select({
            ios: {
              backgroundColor: transparent
            },
            android: {
              paddingBottom: 0
            },
        })
    },
    grid: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modal: {
        backgroundColor: Colors.background.dark,
        flex: 1,
        opacity: 0.9
    },
    thumbnail: {
        height: 150,
        width: 150
    },
    toolbar: {
        alignItems: 'center',
        alignSelf: 'stretch',
        // backgroundColor: Colors.background.primary,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-end'
    },
    toolbarItem: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    toolbarItemText: {
        color: Colors.text.primary.dark,
        fontSize: 16,
        marginRight: 10
    }
});