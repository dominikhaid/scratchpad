import QtQuick
import QtQuick.Controls

ApplicationWindow {
    id: window
    width: 1024
    height: 600
    visible: true
    title: qsTr("Side Panel")

    //! [orientation]
    readonly property bool inPortrait: window.width < window.height
    //! [orientation]


    ToolBar {
        id: overlayHeader

        z: 1
        width: parent.width
        parent: Overlay.overlay

        Label {
            id: label
            anchors.centerIn: parent
            text: "Qt Quick Controls"
        }
    }

    Drawer {
        id: drawer

        y: overlayHeader.height
        width: window.width / 2
        height: window.height - overlayHeader.height

        modal: inPortrait
        interactive: inPortrait
        position: inPortrait ? 0 : 1
        visible: !inPortrait

        ListView {
            id: listView
            anchors.fill: parent

            headerPositioning: ListView.OverlayHeader
            header: Pane {
                id: header
                z: 2
                width: parent.width

                contentHeight: logo.height

                Image {
                    id: logo
                    width: parent.width
                    source: "../images/logo.png"
                    fillMode: implicitWidth > width ? Image.PreserveAspectFit : Image.Pad
                }

                MenuSeparator {
                    parent: header
                    width: parent.width
                    anchors.verticalCenter: parent.bottom
                    visible: !listView.atYBeginning
                }
            }

            footer: ItemDelegate {
                id: footer
                text: qsTr("Footer")
                width: parent.width

                MenuSeparator {
                    parent: footer
                    width: parent.width
                    anchors.verticalCenter: parent.top
                }
            }

            model: 5

            delegate: ItemDelegate {
                text: qsTr("Title %1").arg(index + 1)
                width: listView.width
            }

            ScrollIndicator.vertical: ScrollIndicator { }
        }
    }

    // Shortcut {
    //     sequence: StandardKey.Open
    //     onActivated: openDialog.open()
    // }
    
    //   MenuBar {
    //     Menu {
    //         title: qsTr("&File")

    //         MenuItem {
    //             text: qsTr("&Open")
    //             onTriggered: openDialog.open()
    //         }
    //         MenuItem {
    //             text: qsTr("&Save As...")
    //             onTriggered: saveDialog.open()
    //         }
    //         MenuItem {
    //             text: qsTr("&Quit")
    //             onTriggered: close()
    //         }
    //     }
    // }

    // ColorDialog {
    //     id: colorDialog
    //     currentColor: "black"
    // }

    // MessageDialog {
    //     id : quitDialog
    //     title: qsTr("Quit?")
    //     text: qsTr("The file has been modified. Quit anyway?")
    //     buttons: (MessageDialog.Yes | MessageDialog.No)
    //     onYesClicked: Qt.quit()
    // }

    // header: ToolBar {
    //     leftPadding: 8

    //     Flow {
    //         id: flow
    //         width: parent.width

    //         Row {
    //             id: fileRow
    //             ToolButton {
    //                 id: openButton
    //                 text: "\uF115" // icon-folder-open-empty
    //                 font.family: "fontello"
    //                 onClicked: openDialog.open()
    //             }
    //             ToolSeparator {
    //                 contentItem.visible: fileRow.y === editRow.y
    //             }
    //         }

    //         Row {
    //             id: editRow
    //             ToolButton {
    //                 id: copyButton
    //                 text: "\uF0C5" // icon-docs
    //                 font.family: "fontello"
    //                 focusPolicy: Qt.TabFocus
    //                 enabled: textArea.selectedText
    //                 onClicked: textArea.copy()
    //             }
    //             ToolButton {
    //                 id: cutButton
    //                 text: "\uE802" // icon-scissors
    //                 font.family: "fontello"
    //                 focusPolicy: Qt.TabFocus
    //                 enabled: textArea.selectedText
    //                 onClicked: textArea.cut()
    //             }
    //             ToolButton {
    //                 id: pasteButton
    //                 text: "\uF0EA" // icon-paste
    //                 font.family: "fontello"
    //                 focusPolicy: Qt.TabFocus
    //                 enabled: textArea.canPaste
    //                 onClicked: textArea.paste()
    //             }
    //             ToolSeparator {
    //                 contentItem.visible: editRow.y === formatRow.y
    //             }
    //         }

    //     }
    // }

   

}
