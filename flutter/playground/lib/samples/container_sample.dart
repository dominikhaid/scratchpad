import 'dart:math';

import 'package:flutter/material.dart';
import 'package:training/common/factories.dart';

class ContainerSample extends StatelessWidget {
  const ContainerSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // return const SizedBox(
    //   width: 150,
    //   height: 150,
    //   child: ColoredBox(
    //     color: Colors.green,
    //     child: Padding(
    //       padding: EdgeInsets.all(8.0),
    //       child: Text(
    //         'hello',
    //         style: TextStyle(backgroundColor: Colors.red),
    //       ),
    //     ),
    //   ),
    // );
    return Container(
      width: 150,
      height: 150,

      // constraints: const BoxConstraints(
      //   maxWidth: 100,
      //   minWidth: 50,
      //   maxHeight: 150,
      //   minHeight: 150,
      // ),

      // color: Colors.red,

      decoration: BoxDecoration(
        // color: Colors.red,

        // gradient: const LinearGradient(
        //   colors: [Colors.red, Colors.green],
        //   // begin: Alignment.topLeft,
        //   // end: Alignment.bottomRight,
        //   transform: GradientRotation(pi / 2),
        // ),

        image: const DecorationImage(
          image: NetworkImage('https://placekitten.com/g/600/450'),
          fit: BoxFit.fill,
        ),

        // borderRadius: const BorderRadius.all(
        //   Radius.circular(20),
        // ),
        borderRadius: const BorderRadius.only(
          bottomLeft: Radius.circular(
            20,
          ),
        ),
        border: Border.all(
          color: Colors.green,
          style: BorderStyle.solid,
          width: 5,
        ),
      ),

      padding: const EdgeInsets.all(15),
      margin: const EdgeInsets.all(25),
      // padding: const EdgeInsets.only(left: 15),
      // alignment: Alignment.center,
      // alignment: Alignment.bottomRight,
      // alignment: const Alignment(-0.4, 0.4),
      // alignment: FractionalOffset.topLeft,
      // alignment: FractionalOffset(0.0, 0.0),
      transform: Matrix4.rotationZ(pi / 2),
      // transform: Matrix4.rotationZ(0.1),
      transformAlignment: Alignment.center,
      child: const Text(
        'hello world 2',
        style: TextStyle(backgroundColor: Colors.green),
      ),
    );
  }
}
