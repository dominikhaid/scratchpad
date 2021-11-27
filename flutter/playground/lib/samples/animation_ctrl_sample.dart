import 'package:flutter/material.dart';

class AnimationCtrlSample extends StatefulWidget {
  const AnimationCtrlSample({Key? key}) : super(key: key);

  @override
  _AnimatedWithControllerState createState() => _AnimatedWithControllerState();
}

class _AnimatedWithControllerState extends State<AnimationCtrlSample>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late double value = _controller.value;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 10),
      lowerBound: 0,
      upperBound: 10,
    );
    _controller.addListener(() => setState(() => value = _controller.value));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            '${value.toStringAsPrecision(3)}/10 seconds',
            style: Theme.of(context).textTheme.headline3,
          ),
          TextButton.icon(
            onPressed: () => _controller.forward(from: 0),
            icon: Icon(Icons.play_circle_fill_outlined),
            label: const Text('go'),
          )
        ],
      ),
    );
  }
}
