import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/common/my_flutter_icons_icons.dart';

class ImageFitSample extends StatelessWidget {
  const ImageFitSample({
    Key? key,
  }) : super(key: key);

  List<Widget> _getImageChildrenForFit([BoxFit? fit, bool useRichText = true]) {
    final String text;
    switch (fit) {
      case BoxFit.fitWidth:
        text =
            'Stellt sicher, dass die volle Breite der Quelle angezeigt wird, unabhängig davon, ob die Quelle die Zielbox vertikal überläuft.';
        break;
      case BoxFit.fitHeight:
        text =
            'Stellt sicher, dass die volle Höhe der Quelle angezeigt wird, unabhängig davon, ob die Quelle die Zielbox horizontal überläuft.';
        break;
      case BoxFit.none:
        text =
            'Richtet die Quelle innerhalb der Zielbox aus (standardmäßig zentriert) und verwirft alle Teile der Quelle, die außerhalb der Beschränkung liegen.';
        break;
      case BoxFit.contain:
        text =
            'So groß wie möglich, während die Quelle immer noch vollständig in der Zielbox enthalten ist.';
        break;
      case BoxFit.fill:
        text =
            'Füllt das Zielfeld, indem Sie das Seitenverhältnis der Quelle verzerren.';
        break;
      case BoxFit.cover:
        text =
            'So klein wie möglich, aber dennoch die gesamte Zielbox abdecken.';
        break;
      case BoxFit.scaleDown:
        text =
            'Dies ist dasselbe wie "contain", wenn das Bild dadurch verkleinert würde, andernfalls ist es dasselbe wie "none"';
        break;
      default:
        text = 'BoxFit is null';
    }
    final Widget textContent;
    if (useRichText && fit != null) {
      textContent = SizedBox(
        width: 300,
        child: Padding(
          padding: const EdgeInsets.all(5),
          child: RichText(
            text: TextSpan(
              style: TextStyle(color: Colors.black),
              children: [
                TextSpan(
                  text: fit.toString(),
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                TextSpan(
                  text: ' -> $text',
                ),
                // const TextSpan(
                //     text: 'das macht doch spaß - oder ;)',
                //     style: TextStyle(decoration: TextDecoration.underline)),
              ],
            ),
          ),
        ),
      );
    } else {
      textContent = Text('${fit ?? ''} -> $text');
    }
    return [
      textContent,
      FramedImage(fit: fit),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        // crossAxisAlignment: CrossAxisAlignment.stretch,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ..._getImageChildrenForFit(),
          ..._getImageChildrenForFit(BoxFit.scaleDown),
          ..._getImageChildrenForFit(BoxFit.contain),
          ..._getImageChildrenForFit(BoxFit.none),
          ..._getImageChildrenForFit(BoxFit.fitWidth),
          ..._getImageChildrenForFit(BoxFit.fitHeight),
          ..._getImageChildrenForFit(BoxFit.cover),
          ..._getImageChildrenForFit(BoxFit.fill),
        ],
      ),
    );
  }
}

class FramedImage extends StatelessWidget {
  final MaterialColor boderColor;
  final double borderWidth;
  final BorderStyle borderStyle;
  final double borderRadius;
  final String imageUrl;
  final double width;
  final double height;
  final double margin;
  final double padding;
  BoxFit? fit;
  Widget? child;

  FramedImage({
    Key? key,
    this.child,
    this.boderColor = Colors.blue,
    this.width = 300,
    this.height = 100,
    this.borderWidth = 2,
    this.borderRadius = 5,
    this.borderStyle = BorderStyle.solid,
    this.imageUrl = 'https://placekitten.com/g/600/450',
    // this.imageUrl = 'https://placekitten.com/g/50/50',
    this.padding = 5,
    this.margin = 5,
    this.fit,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(
          color: boderColor,
          width: borderWidth,
          style: borderStyle,
        ),
        borderRadius: BorderRadius.all(Radius.circular(borderRadius)),
        image: DecorationImage(
          image: NetworkImage(imageUrl),
          fit: fit,
        ),
      ),
      constraints: BoxConstraints.expand(
        width: width,
        height: height,
      ),
      padding: EdgeInsets.all(padding),
      margin: EdgeInsets.all(margin),
      child: child,
    );
  }
}
