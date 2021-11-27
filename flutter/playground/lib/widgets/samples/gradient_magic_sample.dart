import 'package:flutter/material.dart';

class GradientMagicSample extends StatelessWidget {
  const GradientMagicSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      // children: List.generate(
      //   15,
      //   (index) => Container(
      //     child: Text('hello world $index'),
      //     color: Colors.red,
      //   ),
      // ),
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Expanded(
          flex: 2,
          child: Container(
            alignment: Alignment.center,
            foregroundDecoration: const BoxDecoration(
              // backgroundBlendMode: BlendMode.exclusion,
              backgroundBlendMode: BlendMode.overlay,
              gradient: LinearGradient(
                colors: [
                  Colors.red,
                  Colors.blue,
                ],
              ),
            ),
            decoration: BoxDecoration(
              image: const DecorationImage(
                  image: NetworkImage('https://placekitten.com/g/1200/1200'),
                  fit: BoxFit.fill),
              border: Border.all(
                color: Colors.green,
                width: 5,
                style: BorderStyle.solid,
              ),
              borderRadius: const BorderRadius.all(
                Radius.circular(20),
              ),
            ),
            child: Text(
              'My nice Cat',
              style: TextStyle(
                fontWeight: FontWeight.w900,
                fontSize: 48,
                foreground: Paint()
                  ..shader = const LinearGradient(
                    colors: [
                      Colors.red,
                      Colors.blue,
                      Colors.red,
                    ],
                  ).createShader(const Rect.fromLTWH(0.0, 0.0, 200.0, 70.0)),
              ),
            ),
          ),
        ),
        Expanded(
          // flex: 3,
          child: Container(
            margin: const EdgeInsets.all(10),
            child: const Text('foo bar'),
            alignment: Alignment.center,
            decoration: const BoxDecoration(
              color: Colors.green,
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(blurRadius: 10),
              ],
              gradient: RadialGradient(
                colors: const [Colors.yellow, Colors.blue],
                stops: const [0.1, 1.0],
              ),
            ),
          ),
        ),
      ],
    );
  }
}
