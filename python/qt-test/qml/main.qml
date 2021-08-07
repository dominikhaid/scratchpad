import QtQuick 
import QtQuick.Window 
import QtQuick.Controls 
import QtQuick.Controls.Material

ApplicationWindow {
    id: window
    width: 1024
    height: 600
    visible: true
    title: qsTr("App Test Setup")

     // SET FLAGS
    flags: Qt.WindowCloseButtonHint | Qt.WindowMinimizeButtonHint | Qt.CustomizeWindowHint | Qt.MSWindowsFixedSizeDialogHint | Qt.WindowTitleHint

    // SET MATERIAL STYLE
    Material.theme: Material.Dark
    Material.accent: Material.LightBlue

    //! [orientation]
    readonly property bool inPortrait: window.width < window.height
    //! [orientation]

    StackView {
        id: stackView
        anchors.fill: parent
        //initialItem: ProjectPage {}
        initialItem: "pages/ProjectPage.qml" 
    }

    // TODO APP FOOTER
    footer: TabBar {
        // ...
        contentHeight: 50
        contentWidth: parent.width
    }
}
