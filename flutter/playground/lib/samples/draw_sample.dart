import 'package:flutter/material.dart';

class DrawSample extends StatelessWidget {
  const DrawSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          width: 100,
          height: 100,
          child: CustomPaint(
            painter: MyPainter(),
          ),
        )
      ],
    );
  }
}

class MyPainter extends CustomPainter {
  final Paint _paint;

  MyPainter() : _paint = Paint()..color = Colors.red;

  @override
  void paint(Canvas canvas, Size size) {
    var center = size.center(Offset.zero);
    var width = size.width;
    var height = size.height;
    var rect = Rect.fromCenter(center: center, width: width, height: height);
    canvas.drawRect(rect, _paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
