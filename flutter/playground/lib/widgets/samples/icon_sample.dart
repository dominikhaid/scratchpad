import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/common/my_flutter_icons_icons.dart';

class IconSample extends StatelessWidget {
  const IconSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const Icon(MyFlutterIcons.nettrek_logo), // Material Icons
        const Icon(Icons.access_alarm), // Material Icons
        const Icon(CupertinoIcons.alarm), // Cupertion Icons
        Icon(Icons.adaptive.flip_camera), // Adaptiv
        Icon(
          Icons.adaptive.flip_camera,
          size: 24, // default
        ), // Adaptiv
        Icon(
          Icons.adaptive.flip_camera,
          size: 48, // default
        ), // Adaptiv
        Icon(
          Icons.adaptive.flip_camera,
          color: Colors.red,
          size: 48, // default
        ), // Adaptiv
        const Icon(
          MyFlutterIcons.nettrek_logo,
          size: 48, // default
        ), // Adaptiv
        const Icon(
          MyFlutterIcons.sentiment_very_dissatisfied,
          color: Colors.red,
          size: 48, // default
        ), // Adaptiv
      ],
    );
  }
}
