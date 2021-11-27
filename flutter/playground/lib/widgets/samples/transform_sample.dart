import 'dart:math';

import 'package:flutter/material.dart';

class TransformSample extends StatelessWidget {
  const TransformSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Spacer(),
        Transform(
          // transform: Matrix4.skewY(0.5),
          transform: Matrix4.skewY(0.5)..rotateZ(45 * pi / 180),
          origin: const Offset(50.0, 50),
          child: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.blue,
          ),
        ),
        const Spacer(),
        Transform(
          // transform: Matrix4.skewY(0.5),
          transform: Matrix4.rotationX(30 * pi / 180)
            ..rotateZ(30 * pi / 180)
            ..setTranslationRaw(100, -0, 0),
          origin: const Offset(50.0, 50),
          child: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.blue,
          ),
        ),
        const Spacer(),
        Transform.rotate(
          angle: 1,
          origin: const Offset(50.0, 50.0),
          child: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.blue,
          ),
        ),
        const Spacer(),
        Transform.rotate(
          angle: 0.5 * pi,
          child: const Text(
            'rotated',
            style: TextStyle(
              backgroundColor: Colors.red,
            ),
          ),
        ),
        const Spacer(),
        Transform.scale(
          scale: 2,
          child: const Text(
            'scaled',
            style: TextStyle(
              backgroundColor: Colors.red,
            ),
          ),
        ),
        const Spacer(),
        Transform.translate(
          offset: const Offset(100, -100),
          child: const Text(
            'transformed',
            style: TextStyle(
              backgroundColor: Colors.red,
            ),
          ),
        ),
        const Spacer(),
      ],
    );
  }
}
