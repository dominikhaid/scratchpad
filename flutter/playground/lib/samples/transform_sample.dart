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
          transform: Matrix4.rotationZ(30 * pi / 180)
            ..setTranslationRaw(100, 0, 0),
          origin: const Offset(50, 50),
          child: Container(
            color: Colors.blue,
            width: 100,
            height: 100,
            child: getText('rotationZ & translation'),
          ),
        ),
        const Spacer(),
        Transform(
          transform: Matrix4.skewY(0.5),
          child: Container(
            color: Colors.blue,
            width: 100,
            height: 100,
            child: getText('skewY(0.5)'),
          ),
        ),
        const Spacer(),
        Transform.rotate(
          angle: 0.5 * pi,
          child: getText('rotate'),
        ),
        const Spacer(),
        Transform.scale(
          scale: 2,
          child: getText('scale'),
        ),
        const Spacer(),
        Transform.translate(
          offset: const Offset(100, -100),
          child: getText('translate'),
        ),
      ],
    );
  }

  Text getText(String text) {
    return Text(
      text,
      style: const TextStyle(
        color: Colors.black,
        backgroundColor: Colors.red,
      ),
    );
  }
}
