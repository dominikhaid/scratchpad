
import QtQuick 
import QtQuick.Window 
import QtQuick.Controls 
import QtQuick.Controls.Material

Page {
    id: root

    // SET MATERIAL STYLE
    Material.theme: Material.Dark
    Material.accent: Material.LightBlue

    header: ToolBar {
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

   
}
