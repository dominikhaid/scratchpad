import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myfirstapp/widgets/samples/bloc_sample/post_bloc.dart';
import 'package:myfirstapp/widgets/samples/button_sample.dart';
import 'package:myfirstapp/widgets/samples/cubit_sample/post_cubit.dart';
import 'package:myfirstapp/widgets/samples/theme_sample.dart';

import 'home.dart';

class MyApp extends StatelessWidget {
  final Widget? child;
  final Navigator? navigator;
  final bool? enableBloc;
  final bool? enableCubit;
  final BlocProvider<PostBloc>? blocProvider;
  final BlocProvider<PostCubit>? cubitProvider;

  MyApp(
      {Key? key, this.child, this.enableBloc, this.enableCubit, this.navigator})
      : blocProvider = enableBloc == true
            ? BlocProvider(create: (_) => PostBloc(), child: child)
            : null,
        cubitProvider = enableCubit == true
            ? BlocProvider(create: (_) => PostCubit(), child: child)
            : null,
        super(key: key);

  Widget? getMyHomeChid() {
    if (blocProvider != null) {
      return blocProvider;
    } else if (cubitProvider != null) {
      return cubitProvider;
    }
    return child;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: (child is ThemeSample || child is ButtonSample) ? theme : null,
      darkTheme: child is ThemeSample ? darkTheme : null,
      themeMode: ThemeMode.system,
      home: (navigator != null) ? navigator : MyHome(child: getMyHomeChid()),
    );
  }
}
