import 'package:flutter/material.dart';

main() {
  runApp(
    MaterialApp(
      title: 'My App',
      themeMode: ThemeMode.dark,
      theme: ThemeData(
        colorScheme: const ColorScheme.light(
          primary: Colors.amber,
          secondary: Colors.orange,
          onPrimary: Colors.black,
          // background: Colors.grey,
        ),
        fontFamily: 'Monospace',
        textTheme: const TextTheme(
          bodyText2: TextStyle(color: Colors.green, fontSize: 22),
        ),
        textButtonTheme: TextButtonThemeData(
          style: TextButton.styleFrom(primary: Colors.purple),
        ),
        floatingActionButtonTheme: FloatingActionButtonThemeData(
          backgroundColor: Colors.orange.shade700, // dunkler
          foregroundColor:
              Colors.white, // Farbe mit der auf den Hintergrund gezeichnet wird
          splashColor: Colors.red.shade100, // Farbeffekt beim Tappen
          extendedTextStyle: const TextStyle(
            // farbe eines Labels - falls benutz
            color: Colors.white,
          ),
        ),
      ),
      darkTheme: ThemeData.dark(),
      home: const ThemeExample(),
    ),
  );
}

class ThemeExample extends StatefulWidget {
  const ThemeExample({Key? key}) : super(key: key);

  @override
  State<ThemeExample> createState() => _ThemeExampleState();
}

class _ThemeExampleState extends State<ThemeExample> {
  late Brightness brightness;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    brightness = Theme.of(context).brightness;
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: getTheme(brightness, MediaQuery.of(context).size, context),
      child: Builder(builder: (context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Hello World!'),
          ),
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextButton(
                  onPressed: () {
                    setState(() {
                      brightness = brightness == Brightness.dark
                          ? Brightness.light
                          : Brightness.dark;
                    });
                  },
                  child: const Text(
                    'Swap Theme',
                  ),
                ),
                const Text('Hello World!'),
              ],
            ),
          ),
        );
      }),
    );
  }

  ThemeData getTheme(Brightness brightness, Size size, BuildContext context) {
    switch (brightness) {
      case Brightness.light:
        return ThemeData(
          colorScheme: const ColorScheme.light(
            primary: Colors.amber,
            secondary: Colors.orange,
            onPrimary: Colors.black,
            // background: Colors.grey,
          ),
          fontFamily: 'Monospace',
          textTheme: TextTheme(
            bodyText2: TextStyle(
              color: Colors.green,
              fontSize: (Theme.of(context).textTheme.bodyText2 ??
                          DefaultTextStyle.of(context).style)
                      .fontSize! *
                  (size.width * 2 / 392.7),
            ),
          ),
          textButtonTheme: TextButtonThemeData(
            style: TextButton.styleFrom(primary: Colors.purple),
          ),
          floatingActionButtonTheme: FloatingActionButtonThemeData(
            backgroundColor: Colors.orange.shade700, // dunkler
            foregroundColor: Colors
                .white, // Farbe mit der auf den Hintergrund gezeichnet wird
            splashColor: Colors.red.shade100, // Farbeffekt beim Tappen
            extendedTextStyle: const TextStyle(
              // farbe eines Labels - falls benutz
              color: Colors.white,
            ),
          ),
        );
      case Brightness.dark:
        return ThemeData(
          colorScheme: const ColorScheme.dark(
            primary: Colors.amber,
            secondary: Colors.orange,
            onPrimary: Colors.white,
            // background: Colors.grey,
          ),
          fontFamily: 'Monospace',
          textTheme: TextTheme(
            bodyText2: TextStyle(
              color: Colors.green,
              fontSize: 14 * (size.width / 392.7),
            ),
          ),
          textButtonTheme: TextButtonThemeData(
            style: TextButton.styleFrom(primary: Colors.purple),
          ),
          floatingActionButtonTheme: FloatingActionButtonThemeData(
            backgroundColor: Colors.orange.shade700, // dunkler
            foregroundColor: Colors
                .black, // Farbe mit der auf den Hintergrund gezeichnet wird
            splashColor: Colors.red.shade100, // Farbeffekt beim Tappen
            extendedTextStyle: const TextStyle(
              // farbe eines Labels - falls benutz
              color: Colors.black,
            ),
          ),
        );
    }
  }
}
