import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:myfirstapp/widgets/common/my_flutter_icons_icons.dart';

class SvgSample extends StatelessWidget {
  const SvgSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SvgPicture.network(
          'https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg',
          color: Colors.red,
        ),
        SizedBox(
          height: 300,
          child: SvgPicture.network(
            'https://upload.wikimedia.org/wikipedia/commons/3/30/SWR_Dachmarke_SW_logo.svg',
            color: Colors.black,
            // color: Colors.blueAccent,
            fit: BoxFit.fitWidth,
          ),
        ),
        // SvgPicture.network(
        //   'https://nettrek.de/assets/image/nettrek-logo.svg',
        // ),
      ],
    );
  }
}
