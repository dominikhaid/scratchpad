import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/navigation/build_scaffold.dart';

class MyHome extends StatelessWidget {
  final Widget? child;

  const MyHome({Key? key, this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return buildScaffold(child: child);
  }
}
