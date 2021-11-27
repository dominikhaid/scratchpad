import 'dart:async';

import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: SimpleStreamExample(),
    ),
  );
}

class SimpleStreamExample extends StatefulWidget {
  const SimpleStreamExample({Key? key}) : super(key: key);

  @override
  _SimpleStreamExampleState createState() => _SimpleStreamExampleState();
}

class _SimpleStreamExampleState extends State<SimpleStreamExample> {
  late final StreamController<String> controller;

  @override
  void initState() {
    super.initState();
    controller = StreamController();
  }

  @override
  void dispose() {
    super.dispose();
    controller.close();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<String>(
      initialData: '',
      stream: controller.stream,
      builder: (context, snapshot) => Scaffold(
        appBar: AppBar(
          title: Text(snapshot.data!),
        ),
        body: Center(
          child: TextField(
            onChanged: (value) => controller.add(value),
          ),
        ),
      ),
    );
  }
}
