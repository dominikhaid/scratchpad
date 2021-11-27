import 'package:flutter/material.dart';
import 'package:training/main/my_app.dart';

class CommonBottomNavBar extends StatelessWidget {
  int currentIndex;

  CommonBottomNavBar({
    Key? key,
    required this.currentIndex,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: this.currentIndex,
      onTap: (value) => Navigator.pushNamed(
        context,
        pages[value], /*arguments: 1*/
      ),
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          icon: Icon(Icons.call),
          label: 'call',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.chat),
          label: 'chat',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.camera),
          label: 'camera',
        )
      ],
    );
  }
}
