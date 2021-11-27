import 'package:flutter/material.dart';

ThemeData darkTheme = ThemeData.from(
  colorScheme: const ColorScheme.dark(),
);

ThemeData theme = ThemeData(
  fontFamily: 'Monospace',
  colorScheme: const ColorScheme.light(
    primary: Colors.red,
    secondary: Colors.deepOrangeAccent,
  ),
  scaffoldBackgroundColor: Colors.white,
  textTheme: const TextTheme(
    bodyText2: TextStyle(
      color: Colors.black54,
      fontWeight: FontWeight.bold,
    ),
  ),
  textButtonTheme: TextButtonThemeData(
    style: TextButton.styleFrom(primary: Colors.green),
  ),
);

class ThemeSample extends StatelessWidget {
  const ThemeSample({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Builder(builder: (context) {
      return Text(
        'Hello Word',
        style: Theme.of(context).textTheme.bodyText2,
        // style: Theme.of(context).textTheme.headline1!.copyWith(fontSize: 24),
      );
    });
  }
}
