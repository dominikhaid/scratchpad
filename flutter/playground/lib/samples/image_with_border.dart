import 'package:flutter/material.dart';

class ImageWithBorder extends StatefulWidget {
  const ImageWithBorder({Key? key}) : super(key: key);

  @override
  _ImageWithBorderState createState() => _ImageWithBorderState();
}

class _ImageWithBorderState extends State<ImageWithBorder> {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        // children: [
        //   makeImageWithBorder(BoxFit.none),
        // ],
        children: BoxFit.values
            .map((currentFitValue) => makeImageWithBorder(currentFitValue))
            .toList(),
      ),
    );
  }

  Container makeImageWithBorder(BoxFit fit) {
    return Container(
      width: 300,
      height: 200,
      decoration: BoxDecoration(
        border:
            Border.all(color: Colors.blue, width: 2, style: BorderStyle.solid),
        borderRadius: const BorderRadius.all(Radius.circular(20)),
        image: DecorationImage(
            image: const NetworkImage('https://placekitten.com/g/600/450'),
            fit: fit),
      ),
      child: Center(
        child: RichText(
          text: TextSpan(
            style: const TextStyle(color: Colors.blue),
            children: [
              TextSpan(
                  text: fit.toString(),
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, color: Colors.red)),
              const TextSpan(text: '\nErklärungstext, wenn es den gibt!')
            ],
          ),
        ),
      ),
    );
  }
}
