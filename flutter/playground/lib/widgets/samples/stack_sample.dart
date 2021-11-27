import 'package:flutter/material.dart';

class StackSample extends StatelessWidget {
  const StackSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      // width: 350,
      // height: 350,
      // decoration: BoxDecoration(border: Border.all()),
      // alignment: Alignment.center,
      child: Stack(
        // fit: StackFit.loose,
        // fit: StackFit.expand,
        children: [
          Container(
            color: Colors.green,
            width: 300,
            height: 300,
          ),
          Positioned.fill(
            top: 150,
            child: Container(
              color: Colors.grey,
            ),
          ),
          Positioned(
              left: 100,
              right: 100,
              bottom: 100,
              top: 100,
              child: Container(
                color: Colors.red,
              )),
          Positioned.directional(
            textDirection: TextDirection.rtl,
            start: 10,
            width: 50,
            top: 140,
            bottom: 140,
            child: Container(
              color: Colors.black38,
            ),
          ),
          Container(
            color: Colors.amber,
            width: 100,
            height: 100,
          ),
          // Transform.translate(
          //   offset: Offset(200, 200),
          Positioned(
            left: 200,
            top: 200,
            // width: 120,
            // height: 120,
            child: buildImage(),
          ),
        ],
      ),
    );
  }

  Image buildImage() {
    return Image.network(
      'https://placekitten.com/g/120/120',
    );
  }
}
