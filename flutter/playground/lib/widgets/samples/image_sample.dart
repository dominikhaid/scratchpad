import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/common/my_flutter_icons_icons.dart';

class ImageSample extends StatelessWidget {
  const ImageSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image.network('https://placekitten.com/g/240/180'),
        Image.asset(
          'assets/images/450.jpeg',
        )
      ],
    );
  }
}
