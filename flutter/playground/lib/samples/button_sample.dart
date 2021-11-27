import 'package:flutter/material.dart';
import 'package:training/common/my_flutter_icons_icons.dart';

class ButtonSample extends StatelessWidget {
  const ButtonSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextButtonTheme(
          // Theming über inherited Widtgets - Theme wird in den Context geschoben
          data: TextButtonThemeData(
              style: TextButton.styleFrom(
            primary: Colors.green,
          )),
          child: TextButton(
            onPressed: () {
              print('Clicked on TextButton');
            },
            child: const Text('TextButton'),
          ),
        ),
        TextButton(
          onPressed: () {
            print('Clicked on TextButton');
          },
          style: TextButton.styleFrom(
            primary: Colors.red,
          ),
          child: const Text('TextButton'),
        ),
        TextButton(
          onPressed: () {
            print('Clicked on TextButton');
          },
          child: const Text('TextButton'),
        ),
        const TextButton(
          onPressed: null, // disable Button
          child: Text('TextButton'),
        ),
        IconButton(
          onPressed: () {
            print('Clicked on IconButton');
          },
          icon: const Icon(Icons.add),
        ),
        ElevatedButton(
          onPressed: () {
            print('clicked on ElevatedButton');
          },
          style: ElevatedButton.styleFrom(primary: Colors.amber),
          child: const Text('ElevatedButton'),
        ),
        ElevatedButton(
          onPressed: () {
            print('clicked on ElevatedButton');
          },
          style: ButtonStyle(
            backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
            textStyle: MaterialStateProperty.all<TextStyle>(
                const TextStyle(fontFamily: 'Monospace')),
          ),
          child: const Text('ElevatedButton'),
        ),
        ElevatedButton(
          onPressed: () {
            print('clicked on ElevatedButton');
          },
          style: ButtonStyle(
            backgroundColor:
                MaterialStateProperty.resolveWith<Color?>((states) {
              if (states.contains(MaterialState.pressed)) {
                // return Colors.tealAccent;
                return Theme.of(context).colorScheme.primaryVariant;
              }
              return null;
            }),
            textStyle: MaterialStateProperty.resolveWith<TextStyle>((states) {
              if (states.contains(MaterialState.pressed)) {
                // return Colors.tealAccent;
                return const TextStyle(decoration: TextDecoration.underline);
              }
              return const TextStyle();
            }),
          ),
          child: const Text('ElevatedButton'),
        ),
        OutlinedButton(
          onPressed: () {
            print('clicked on OutlinedButton');
          },
          child: const Text('OutlinedButton'),
        ),
        OutlinedButton.icon(
          onPressed: () {
            print('clicked on OutlinedButton');
          },
          label: const Text('OutlinedButton with Icon'),
          icon: const Icon(Icons.add),
        ),
        const Center(
          widthFactor: 2,
          heightFactor: 1.5,
          child: Text('hello'),
        )
      ],
    );
  }
}
