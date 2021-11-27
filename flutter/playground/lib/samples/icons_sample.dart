import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:training/common/my_flutter_icons_icons.dart';

class IconSample extends StatelessWidget {
  const IconSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: const [
        Icon(
          Icons.add,
          size: 12,
        ),
        Icon(
          Icons.add,
          size: 24,
          color: Colors.red,
        ), // default
        Icon(
          Icons.add,
          size: 48,
        ), // default
        Icon(
          MyFlutterIcons.nettrek_logo,
          size: 72,
          color: Colors.red,
        ),
        // Icon(CupertinoIcons.camera_on_rectangle),
        // Icon(Icons.adaptive.flip_camera),
      ],
    );
  }
}
