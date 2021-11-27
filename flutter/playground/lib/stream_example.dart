import 'dart:async';

import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: StreamExample(),
    ),
  );
}

class StreamExample extends StatefulWidget {
  const StreamExample({Key? key}) : super(key: key);

  @override
  _StreamExampleState createState() => _StreamExampleState();
}

class _StreamExampleState extends State<StreamExample> {
  late final StreamController<String> controller;
  late final StreamSubscription<String> subscription;

  String myString = '';

  @override
  void initState() {
    super.initState();
    controller = StreamController();
    subscription = controller.stream.listen((event) {
      setState(() {
        myString = event;
      });
    });
  }

  @override
  void dispose() {
    super.dispose();
    subscription.cancel();
    controller.close();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(myString),
      ),
      body: Center(
        child: MyInput(sink: controller.sink),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(subscription.isPaused ? Icons.pause : Icons.home),
        onPressed: () {
          setState(
            () {
              if (subscription.isPaused) {
                subscription.resume();
              } else {
                subscription.pause();
              }
            },
          );
        },
      ),
    );
  }
}

class MyInput extends StatelessWidget {
  const MyInput({
    Key? key,
    required this.sink,
  }) : super(key: key);

  final Sink<String> sink;

  @override
  Widget build(BuildContext context) {
    return TextField(
      onChanged: (value) => sink.add(value),
    );
  }
}
