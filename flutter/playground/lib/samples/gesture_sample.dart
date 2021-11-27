import 'package:flutter/material.dart';

class GestureSample extends StatefulWidget {
  const GestureSample({Key? key}) : super(key: key);

  @override
  _MyDetectorState createState() => _MyDetectorState();
}

class _MyDetectorState extends State<GestureSample> {
  String _message = '---';

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => _message = 'Tap'),
      onDoubleTap: () => setState(() => _message = 'Double Tap'),
      onForcePressPeak: (details) {
        print(details);
        setState(() => _message = 'Force Press: ${details.pressure}');
      },
      onLongPress: () => setState(() => _message = 'Long Press'),
      onHorizontalDragEnd: (details) {
        print(details);
        setState(
            () => _message = 'Horizontal Drag: ${details.primaryVelocity}');
      },
      onHorizontalDragUpdate: (details) {
        setState(
            () => _message = 'Horizontal Draging: ${details.primaryDelta}');
      },
      onVerticalDragEnd: (details) => setState(
          () => _message = 'Vertical Drag: ${details.primaryVelocity}'),
      onVerticalDragUpdate: (details) => setState(
          () => _message = 'Vertical Draging: ${details.primaryDelta}'),
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        color: Colors.red,
        child: Center(
          child: Text(
            _message,
            style: Theme.of(context).textTheme.headline3,
          ),
        ),
      ),
    );
  }
}
