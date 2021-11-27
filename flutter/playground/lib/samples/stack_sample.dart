import 'package:flutter/material.dart';

class StackSample extends StatelessWidget {
  const StackSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // buildContainer(),
        const SizedBox(
          width: 300,
          height: 300,
        ),
        Positioned.fill(
          top: 150,
          // left: 150,
          child: Container(
            color: Colors.grey,
          ),
        ),
        Positioned(
            left: 100,
            top: 100,
            right: 100,
            bottom: 100,
            // width: 100,
            // height: 100,
            child: Image.asset('assets/images/450.jpeg') /**/
            ),
        Positioned.directional(
          start: 10,
          width: 50,
          top: 140,
          height: 50,
          textDirection: TextDirection.ltr,
          child: Container(
            color: Colors.red,
          ),
        )
      ],
    );
  }

  Container buildContainer(
      {Color color = Colors.red, double width = 300, double height = 300}) {
    return Container(
      color: Colors.green,
      width: 300,
      height: 300,
    );
  }
}
