import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ButtonSample extends StatelessWidget {
  const ButtonSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextButtonTheme(
          data: TextButtonThemeData(
              style: TextButton.styleFrom(
            primary: Colors.orange,
          )),
          child: TextButton(
            // onPressed: null, //disabled
            onPressed: () => print('textbtn clicked'),
            child: Text('hello text btn'),
          ),
        ),
        TextButton(
            // onPressed: null, //disabled
            onPressed: () => print('textbtn clicked'),
            child: Text('hello text btn')),
        TextButton(
          // onPressed: null, //disabled
          onPressed: () => print('textbtn clicked'),
          child: Text('hello text btn'),
          style: TextButton.styleFrom(
            primary: Colors.red,
          ),
        ),
        IconButton(
          onPressed: () => print('icon btn pressen'),
          icon: Icon(Icons.access_alarm),
        ),
        ElevatedButton(
          onPressed: () => null,
          child: Text('hello'),
        ),
        ElevatedButton(
          onPressed: () => print('elevated btn pressen'),
          child: const Text('hello elevated btn'),
          style: ButtonStyle(
            // backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
            // textStyle: MaterialStateProperty.all<TextStyle>(const TextStyle(
            //   fontSize: 24,
            // )),
            backgroundColor:
                MaterialStateProperty.resolveWith<Color?>((states) {
              if (states.contains(MaterialState.pressed)) {
                // return Colors.green;
                // return Theme.of(context).colorScheme.primaryVariant;
                return Theme.of(context)
                    .colorScheme
                    .primaryVariant
                    .withOpacity(0.5);
              }
              return null;
            }),
            textStyle: MaterialStateProperty.resolveWith<TextStyle>((states) {
              // if (states.contains(MaterialState.hovered) ||
              //     states.contains(MaterialState.pressed)) {
              if (states.contains(MaterialState.hovered) ||
                  states.contains(MaterialState.pressed)) {
                return const TextStyle(
                  decoration: TextDecoration.underline,
                );
              }
              return TextStyle();
            }),
          ),
          // style: ElevatedButton.styleFrom(
          //   primary: Colors.red,
          //   onPrimary: Colors.black,
          //   textStyle: const TextStyle(
          //     fontSize: 24,
          //   ),
          // ),
        ),
        OutlinedButton.icon(
          onPressed: () => print('Outlined btn pressen'),
          icon: Icon(Icons.access_alarm),
          label: Text('hello Outlined btn'),
        ),
        OutlinedButton(
          style: OutlinedButton.styleFrom(
            primary: Colors.red, // font
            // backgroundColor: Colors.red,
            // alignment: const Alignment(-1.0, 0.0),
            alignment: const FractionalOffset(1, 0.5), // center / center
            // padding: const EdgeInsets.all(100),
            padding: const EdgeInsets.only(right: 20),
            textStyle: const TextStyle(fontWeight: FontWeight.bold),
            // maximumSize: const Size(300, 100),
            minimumSize: const Size(120, 30),
          ),
          onPressed: () {
            print('Received click');
          },
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.add),
              Text('Click Me'),
            ],
          ),
        ),
        OutlinedButton(
          onPressed: () => print('Outlined btn pressen'),
          style: OutlinedButton.styleFrom(
            maximumSize: const Size(300, 60),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.access_alarm),
              Padding(
                padding: EdgeInsets.only(
                  left: 10,
                ),
                child: Text('hello Outlined btn'),
              ),
            ],
          ),
        )
      ],
    );
  }
}
