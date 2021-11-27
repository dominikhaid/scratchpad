import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MediaQuerySample extends StatelessWidget {
  const MediaQuerySample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    MediaQueryData queryData = MediaQuery.of(context);
    print(12);
    return
        /*
    SafeArea(
      minimum: const EdgeInsets.all(1),
      child: Align(
        alignment: Alignment.center,
        child: Text(queryData.toString()),
      ),
    );
    */
        OrientationBuilder(
      builder: (context, orientation) {
        MediaQueryData queryData = MediaQuery.of(context);
        print(queryData.size);
        print(orientation);
        return Align(
          alignment: Alignment.center,
          child: Text('$orientation $queryData'),
        );
      },
    );
  }
}

void setPreferredOrientations() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
    // DeviceOrientation.landscapeLeft,
    // DeviceOrientation.landscapeRight,
  ]);
}
