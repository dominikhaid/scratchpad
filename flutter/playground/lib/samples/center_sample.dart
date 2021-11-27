import 'package:flutter/material.dart';
import 'package:training/common/factories.dart';

class CenterSample extends StatelessWidget {
  const CenterSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    ThemeData themeData = Theme.of(context);
    // print(themeData.textTheme.bodyText1);
    // print(themeData.textTheme.bodyText2);
    return Center(
      child: Text(
        'hello world 2',
        style: themeData.textTheme.bodyText1,
      ),
      // child: Builder(
      //     builder: (context) {
      //       return Text(
      //         'hello world 2',
      //         style: themeData.textTheme.bodyText1,
      //       );
      //     }
      // )
    );
  }
}
