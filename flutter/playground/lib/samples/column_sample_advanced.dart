import 'dart:io';

import 'package:flutter/material.dart';

class ColumnSampleAdvanced extends StatelessWidget {
  const ColumnSampleAdvanced({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.max,
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisSize: MainAxisSize.max,
            children: [
              Flexible(
                flex: 2,
                fit: FlexFit.tight,
                child: Container(
                  color: Colors.lightGreen,
                  child: const Text('data\ndd'),
                ),
              ),
              Flexible(
                flex: 1,
                fit: FlexFit.tight,
                child: Container(
                  color: Colors.amber,
                  child: const Text(
                    'data',
                  ),
                ),
              ),
            ],
          ),
        ),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisSize: MainAxisSize.max,
            children: [
              Expanded(
                flex: 2,
                child: Container(
                  color: Colors.red,
                  child: const Text('data'),
                ),
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    constraints: const BoxConstraints(
                      minHeight: 10,
                      maxHeight: 100,
                    ),
                    child: const Text(
                      'data',
                      // 'data\ndata\ndata\ndata\ndata\ndata\ndata',
                      // textScaleFactor: 2,
                    ),
                    // child: const FittedBox(
                    //   fit: BoxFit.fill,
                    //   child: Text(
                    //     'na',
                    //     // 'na na na na na na na na na na na na Batman',
                    //     // 'na\nna\nna\nBatman',
                    //     // 'na\nna\nna\nna\nna\nna\nna\nna\nna\nna\nna\nna\nBatman',
                    //   ),
                    // ),
                  )
                ],
              ),
              /*
              Container(
                color: Colors.black,
                constraints: const BoxConstraints(
                  minHeight: 10,
                  maxHeight: 100,
                ),
              ),
              */
              /*Expanded(
                // fit: FlexFit.loose, // standard
                child: Container(
                  color: Colors.black,
                  child: const Text('data'),
                ),
              ),*/
              Expanded(
                child: Container(
                  color: Colors.orange,
                  child: const Text('data'),
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}
