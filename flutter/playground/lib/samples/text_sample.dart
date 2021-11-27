import 'package:flutter/material.dart';

class TextSample extends StatelessWidget {
  const TextSample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text('1. Text - Normaler Text'),
        const Text(
          '2. Text - Kusiv Text',
          style: TextStyle(
            fontStyle: FontStyle.italic,
          ),
        ),
        const Text(
          '2. Text - Fett Text',
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
        const Text(
          '2. Text - Monospace Text',
          style: TextStyle(
            fontFamily: 'Monospace',
          ),
        ),
        const Text(
          '2. Text - Unterstrichen Text',
          style: TextStyle(
            decoration: TextDecoration.underline,
            decorationStyle: TextDecorationStyle.dashed,
            decorationThickness: 3,
            decorationColor: Colors.orange,
          ),
        ),
        const SizedBox(
          width: 150,
          child: Text(
            'lorem dasd ewrf s gdfs eraseas dee deadae daedes daedeadae',
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ),
        RichText(
          // <span style...>Hello <strong>World</strong></span>
          text: const TextSpan(
            style: TextStyle(
                color: Colors.green), // style für den gesamte RichText
            children: [
              // Texte aus dem der RichText zusammengebaut wird
              TextSpan(
                text: 'hello',
                style: TextStyle(
                    fontWeight: FontWeight
                        .bold), // individuelle Layouts von Textpassagen
              ),
              TextSpan(text: ' word'),
            ],
          ),
        ),
      ],
    );
  }
}
