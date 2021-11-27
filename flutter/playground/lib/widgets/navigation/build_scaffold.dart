import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/common/my_bottom_navigation_bar.dart';

import 'build_navigator.dart';

Scaffold buildScaffold({Widget? child, String? appBarTitle}) {
  return Scaffold(
    body: child,
    appBar: AppBar(
      title: Text(appBarTitle ?? 'App Title'),
    ),
    floatingActionButton: FloatingActionButton(
      onPressed: () => print('clicked'),
      child: const Icon(Icons.add),
    ),
    bottomNavigationBar: MyBottomNavigationBar(
      currentIndex: (appBarTitle != null) ? pages.indexOf(appBarTitle) : 0,
    ),
  );
}
