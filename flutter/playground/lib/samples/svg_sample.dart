import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SvgSample extends StatelessWidget {
  const SvgSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SvgPicture.asset(
          'assets/svg/netTrek-logo.svg',
          color: Colors.blue,
        ),
        SvgPicture.network(
          'https://upload.wikimedia.org/wikipedia/commons/3/30/SWR_Dachmarke_SW_logo.svg',
          color: Colors.red,
        )
      ],
    );
  }
}
