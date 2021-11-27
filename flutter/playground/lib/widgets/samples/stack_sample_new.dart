import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/common/my_flutter_icons_icons.dart';

class StackSample extends StatelessWidget {
  const StackSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Container(
          width: 300,
          height: 300,
          color: Colors.green,
        ),
        /* wird komplett ausgefüllt von 0,0
        Positioned.fill(
            child: Container(
          color: Colors.grey,
        ),
        */
        /* wird ausgefüllt von top 150 bis Ende (300) falls auch y  */
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
          child: Container(
            color: Colors.red,
          ),
        ),
        Positioned.directional(
          textDirection: TextDirection.rtl,
          start: 10,
          width: 50,
          top: 140,
          bottom: 140,
          child: Container(color: Colors.orange),
        ), /*
        Container(
          width: 50,
          height: 50,
          color: Colors.amber,
        )*/
      ],
    );
  }
}
