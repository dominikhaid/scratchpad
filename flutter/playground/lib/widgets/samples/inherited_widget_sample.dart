import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class InheritedWidgetSample extends StatelessWidget {
  const InheritedWidgetSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MyInfo(
      username: 'Saban',
      child: UsesMyInheritedColor(
        child: MyInheritedColor(
          myColor: Colors.red,
          child: UsesMyInheritedColor(
            child: UsesMyInheritedColor(
              child: MyInheritedColor(
                myColor: Colors.blue,
                child: UsesMyInheritedColor(
                  child: MyInheritedColor(
                    myColor: Colors.green,
                    child: UsesMyInheritedColor(),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
    /*  MyInfo(
      // minimum: const EdgeInsets.all(1),
      username: 'Peter',
      child: Align(
        alignment: Alignment.center,
        child: Builder(builder: (context) {
          String name = MyInfo.of(context).username;
          return Text('Hello $name');
        }),
      ),
    );
    */
  }
}

class MyInheritedColor extends InheritedWidget {
  const MyInheritedColor({
    required this.myColor,
    Key? key,
    required Widget child,
  }) : super(key: key, child: child);

  final Color myColor;

  static MyInheritedColor? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<MyInheritedColor>();
  }

  @override
  bool updateShouldNotify(MyInheritedColor oldWidget) {
    return myColor != oldWidget.myColor;
  }
}

class UsesMyInheritedColor extends StatelessWidget {
  const UsesMyInheritedColor({
    Key? key,
    this.child,
  }) : super(key: key);

  final Widget? child;

  @override
  Widget build(BuildContext context) {
    print(MyInfo.of(context).username);

    return Container(
      padding: const EdgeInsets.all(32.0),
      decoration: BoxDecoration(
        color: MyInheritedColor.of(context)?.myColor ?? Colors.black,
        border: Border.all(color: Colors.white),
      ),
      child: child,
    );
  }
}

class MyInfo extends InheritedWidget {
  final String username;

  const MyInfo({
    Key? key,
    required this.username,
    required Widget child,
  }) : super(key: key, child: child);

  static MyInfo of(BuildContext context) {
    final MyInfo? result = context.dependOnInheritedWidgetOfExactType<MyInfo>();
    assert(result != null, 'No MyInfo found in context');
    return result!;
  }

  @override
  bool updateShouldNotify(MyInfo old) {
    return username != old.username;
  }
}

class MyValue extends InheritedWidget {
  final int val;
  const MyValue({
    Key? key,
    required Widget child,
    required this.val,
  }) : super(key: key, child: child);

  static MyValue? of(BuildContext context) {
    final MyValue? result =
        context.dependOnInheritedWidgetOfExactType<MyValue>();
    return result;
  }

  @override
  bool updateShouldNotify(MyValue old) {
    return val != old.val;
  }
}
