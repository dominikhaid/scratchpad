import 'package:flutter/material.dart';

class ColumnSample extends StatelessWidget {
  const ColumnSample({Key? key}) : super(key: key);

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
        const Expanded(
          child: ColoredBox(
            color: Color(0x7C000000),
            child: Align(
              child: const Text('hello world'),
            ),
          ),
        ),
        // Container(
        //   height: 100,
        // ),
        // const Text('hello world'),
        const Spacer(
          flex: 1,
        ),
        Expanded(
          flex: 2,
          child: Container(
            child: const Text('hello world'),
            alignment: Alignment.center,
            color: Colors.red,
          ),
        ),
        Expanded(
          flex: 3,
          child: Container(
            child: const Text('foo bar'),
            alignment: Alignment.center,
            color: Colors.green,
          ),
        ),
      ],
    );
  }
}
