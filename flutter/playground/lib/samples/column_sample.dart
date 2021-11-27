import 'package:flutter/material.dart';

class ColumnSample extends StatelessWidget {
  const ColumnSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      // mainAxisSize: MainAxisSize.min,
      // mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Expanded(
          // 1/6
          child: Container(
            color: Colors.red,
          ),
        ),
        const Spacer(),
        Expanded(
          // 1/3
          flex: 2,
          child: Container(
            color: Colors.yellow,
          ),
        ),
        const SizedBox(
          height: 100,
        ),
        Expanded(
          // 1/2
          flex: 3,
          child: Container(
            color: Colors.green,
          ),
        )

        // Expanded(
        //   child: Container(
        //     color: Colors.green,
        //     child: const Text(
        //       'hello',
        //       style: TextStyle(backgroundColor: Colors.red),
        //     ),
        //   ),
        // ),
        // Container(color: Colors.orange, height: 123),
        // const Spacer(),
        // Container(
        //   color: Colors.green,
        //   child: const Text(
        //     'world',
        //     style: TextStyle(backgroundColor: Colors.red),
        //   ),
        // ),
        // Container(
        //   color: Colors.green,
        //   child: const Text(
        //     'foo bar',
        //     style: TextStyle(backgroundColor: Colors.red),
        //   ),
        // ),
      ],
    );
  }
}
