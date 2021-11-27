import 'package:flutter/material.dart';

class UseInheritedColor extends StatelessWidget {
  final Widget? child;

  const UseInheritedColor({
    Key? key,
    this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        color: MyInheritedColor.of(context)?.myColor ?? Colors.black,
        border: Border.all(color: Colors.white),
      ),
      child: child,
    );
  }
}

class MyInheritedColor extends InheritedWidget {
  final Color myColor;

  const MyInheritedColor({
    Key? key,
    required this.myColor,
    required Widget child,
  }) : super(key: key, child: child);

  static MyInheritedColor? of(BuildContext context) {
    final MyInheritedColor? result =
        context.dependOnInheritedWidgetOfExactType<MyInheritedColor>();
    // assert(result != null, 'No MyInheritedColor found in context');
    return result;
  }

  @override
  bool updateShouldNotify(MyInheritedColor old) {
    return myColor != old.myColor;
  }
}

class MyInfo extends InheritedWidget {
  final String userName;

  const MyInfo({
    Key? key,
    required this.userName,
    required Widget child,
  }) : super(key: key, child: child);

  static MyInfo of(BuildContext context) {
    final MyInfo? result = context.dependOnInheritedWidgetOfExactType<MyInfo>();
    // assert(result != null, 'No MyInfo found in context');
    return result!;
  }

  @override
  bool updateShouldNotify(MyInfo old) {
    return userName != old.userName;
  }
}

class MyInheritedSample extends StatelessWidget {
  const MyInheritedSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MyInfo(
      userName: 'Heike Müller',
      child: UseInheritedColor(
        child: MyInheritedColor(
          myColor: Colors.red,
          child: UseInheritedColor(
            child: UseInheritedColor(
              child: MyInheritedColor(
                myColor: Colors.green,
                child: UseInheritedColor(),
              ),
            ),
          ),
        ),
      ),
    );
  }
  /*
  Widget build(BuildContext context) {
    return MyInfo(
        userName: 'Heike Müller',
        child: Builder(
          builder: (context) {
            String userName = MyInfo.of(context).userName;
            return Text(userName);
          },
        ));
  }
  */
}
