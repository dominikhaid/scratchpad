Rectangle {
    width: 400
    height: 200

    Rectangle {
        width: parent.width / 2
        height: parent.height
    }

    Rectangle {
        width: parent.width / 2
        height: parent.height
        x: parent.width / 2
    }
}