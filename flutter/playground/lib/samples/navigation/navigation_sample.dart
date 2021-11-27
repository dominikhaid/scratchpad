import 'package:flutter/material.dart';

class NavigationSampleSimple extends StatelessWidget {
  const NavigationSampleSimple({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Navigator.of(context).push(route)
    return TextButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return Scaffold(
                appBar: AppBar(
                  title: const Text('pushed route'),
                ),
                body: Center(
                  child: TextButton.icon(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    icon: const Icon(Icons.remove_circle),
                    label: const Text('remove'),
                  ),
                ),
              );
            },
          ),
        );
      },
      icon: const Icon(Icons.circle),
      label: const Text('route'),
    );
  }
}
