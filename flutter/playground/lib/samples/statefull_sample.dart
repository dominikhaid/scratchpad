import 'package:flutter/material.dart';

class StatefullSample extends StatefulWidget {
  const StatefullSample({Key? key}) : super(key: key);

  @override
  _StatefullSampleState createState() => _StatefullSampleState();
}

class _StatefullSampleState extends State<StatefullSample> {
  String textContent = 'hello world';

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text(textContent),
      TextButton(
          onPressed: () {
            setState(() {
              textContent =
                  textContent == 'hello world' ? 'foo bar' : 'hello world';
            });
          },
          child: const Text('foo bar mich'))
    ]);
  }
}
