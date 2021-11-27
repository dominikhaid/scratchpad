import 'package:flutter/material.dart';
import 'package:myfirstapp/widgets/navigation/build_navigator.dart';

class MyBottomNavigationBar extends StatelessWidget {
  final int currentIndex;
  const MyBottomNavigationBar({
    Key? key,
    this.currentIndex = 0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: currentIndex,
      onTap: (value) {
        if (value != currentIndex) {
          Navigator.pushNamed(context, pages[value]);
        }
      },
      items: const [
        BottomNavigationBarItem(
          icon: Icon(Icons.call),
          label: 'Image',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.camera),
          label: 'List',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.chat),
          label: 'Grid',
        )
      ],
    );
  }
}
