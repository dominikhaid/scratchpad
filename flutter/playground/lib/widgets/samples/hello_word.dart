import 'package:flutter/material.dart';

class Zustand extends StatefulWidget {
  const Zustand({Key? key}) : super(key: key);

  @override
  _ZustandState createState() => _ZustandState();
}

class _ZustandState extends State<Zustand> {
  int num = 0;

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text('zahl := $num'),
      TextButton(
          onPressed: () {
            setState(() {
              num++;
            });
          },
          child: const Text('klick mich'))
    ]);
  }
}
