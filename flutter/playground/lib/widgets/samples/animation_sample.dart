import 'dart:math';

import 'package:flutter/material.dart';

class AnimiereContainer extends StatefulWidget {
  const AnimiereContainer({Key? key, required this.defaultSize})
      : super(key: key);

  final double defaultSize;

  @override
  _AnimiereContainerState createState() => _AnimiereContainerState();
}

class _AnimiereContainerState extends State<AnimiereContainer>
    with SingleTickerProviderStateMixin {
  late double _size = widget.defaultSize;

  final List colors = const [Colors.red, Colors.green, Colors.yellow];
  final Random random = Random();

  late Color _selectedColor = colors[random.nextInt(3)];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Center(
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 500),
              color: Colors.red,
              width: _size,
              height: _size,
            ),
          ),
          Spacer(),
          AnimatedDefaultTextStyle(
              child: const Text('hello'),
              style: TextStyle(fontSize: _size, color: _selectedColor),
              duration: const Duration(milliseconds: 500)),
          Spacer(),
          Slider(
            onChanged: (double value) => setState(() {
              _size = value * widget.defaultSize;
              _selectedColor = colors[random.nextInt(3)];
            }),
            value: _size / widget.defaultSize,
            min: 1,
            max: 10,
            divisions: 9,
          )
        ],
      ),
    );
  }
}
