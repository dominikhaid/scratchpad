import 'dart:math';

import 'package:flutter/material.dart';

class ContainerSample extends StatelessWidget {
  const ContainerSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // return const SizedBox(
    //   width: 50,
    //   child: ColoredBox(
    //     color: Colors.red,
    //     child: Text('hello World!'),
    //   ),
    // );
    return Container(
/*
      color: Colors.red,

      width: 150,
      height: 150,
*/

      constraints: const BoxConstraints(
        minWidth: 100,
        minHeight: 100,
        maxHeight: 150,
      ),

      decoration: const BoxDecoration(
        // color: Colors.red,

        // image: const DecorationImage(
        //     image: NetworkImage('https://placekitten.com/g/600/450'),
        //     fit: BoxFit.fill),

        gradient: LinearGradient(
          colors: [
            Colors.red,
            Colors.green,
          ],
          begin: Alignment.center,
          // begin: Alignment.bottomRight,
          // end: Alignment.bottomRight,
          transform: GradientRotation(pi / 2),
        ),

        /*
          border: Border.all(
            color: Colors.green,
            width: 5,
            style: BorderStyle.solid,
          ),

          */
        border: Border(
          top: BorderSide(
            style: BorderStyle.solid,
            color: Colors.green,
            width: 5.0,
          ),
        ),
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(
            20,
          ),
        ),
        // borderRadius: BorderRadius.all(
        //   Radius.circular(20),
        // ),
      ),

      padding: const EdgeInsets.all(5),

      margin: const EdgeInsets.all(5),

      // alignment: Alignment(0, 0), // -1 -> 1 - Center 0 x 0
      // alignment: Alignment(-1, 0),
      // alignment: Alignment(-1, -1),
      // alignment: Alignment(1, 1),
      // alignment: FractionalOffset(1, 1),
      // alignment: FractionalOffset(0.5, 0.5), // 0 -> 1 - center 0,5 x 0,5
      // alignment: FractionalOffset.
      // alignment: Alignment.centerRight,

      // transform: Matrix4.rotationZ(0.1),
      // transform: Matrix4.rotationZ(45 * pi / 180),
      // transformAlignment: Alignment.center,
      // transformAlignment: Alignment.centerRight,

      // padding: EdgeInsets.only(left: 5),
      child: const Text('hello World! asd ndasd '),
    );
  }
}
