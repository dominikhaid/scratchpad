import 'package:flutter/material.dart';

class ImageSample extends StatefulWidget {
  const ImageSample({Key? key}) : super(key: key);

  @override
  _ImageSampleState createState() => _ImageSampleState();
}

class _ImageSampleState extends State<ImageSample> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image.asset('assets/images/450.jpeg'),
        Image.network(
          'https://placekitten.com/g/600/450',
          width: 300,
          height: 300,
          fit: BoxFit.none,
          alignment: Alignment.topLeft,
        ),
      ],
    );
  }
}
