import 'package:flutter/material.dart';

class TextSample extends StatelessWidget {
  const TextSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      'Hello World ! ***',
      textScaleFactor: 1.0,
      maxLines: 1,
      overflow: TextOverflow.ellipsis,
      style: Theme.of(context).textTheme.headline4,
      /*
      style: TextStyle(
        color: Colors.red,
        backgroundColor: Colors.yellow,
        fontFamily: 'Monospace',
        fontWeight: FontWeight.bold,
        fontSize: 48,
        decoration: TextDecoration.lineThrough,
        decorationColor: Colors.green,
        decorationStyle: TextDecorationStyle.wavy,
        decorationThickness: 2,
      ),
      */
    );
  }
}
