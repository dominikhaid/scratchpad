import 'package:flutter/material.dart';
import 'package:training/samples/animation_ctrl_sample.dart';
import 'package:training/samples/animation_sample.dart';
import 'package:training/samples/bloc_sample/list_view_with_bloc_builder_sample.dart';
import 'package:training/samples/button_sample.dart';
import 'package:training/samples/center_sample.dart';
import 'package:training/samples/column_sample.dart';
import 'package:training/samples/column_sample_advanced.dart';
import 'package:training/samples/container_sample.dart';
import 'package:training/samples/cubit_sample/bloc_builder_4_cubit_sample.dart';
import 'package:training/samples/custom_painter_sample.dart';
import 'package:training/samples/draw_sample.dart';
import 'package:training/samples/future_builder_sample.dart';
import 'package:training/samples/gesture_sample.dart';
import 'package:training/samples/gradient_magic_sample.dart';
import 'package:training/samples/grid_view_sample.dart';
import 'package:training/samples/grid_view_sample_with_pageview.dart';
import 'package:training/samples/icons_sample.dart';
import 'package:training/samples/image_sample.dart';
import 'package:training/samples/image_with_border.dart';
import 'package:training/samples/list_view_sample.dart';
import 'package:training/samples/list_view_statefull_sample.dart';
import 'package:training/samples/media_query_sample.dart';
import 'package:training/samples/my_inherited_sample.dart';
import 'package:training/samples/navigation/navigation_sample.dart';
import 'package:training/samples/sliver_view_sample.dart';
import 'package:training/samples/stack_sample.dart';
import 'package:training/samples/statefull_sample.dart';
import 'package:training/samples/svg_sample.dart';
import 'package:training/samples/text_sample.dart';
import 'package:training/samples/transform_sample.dart';
import 'package:training/samples/use_bloc_sample.dart';

import 'main/my_app.dart';

void main() {
  setPreferredOrientations();

  var _pixelRatio = WidgetsBinding.instance?.window.devicePixelRatio ?? 1;
  var _screenWidth = WidgetsBinding.instance?.window.physicalSize.width ?? 400;
  var _screenHeight =
      WidgetsBinding.instance?.window.physicalSize.height ?? 800;
  var _textScaleFactor = WidgetsBinding.instance?.window.textScaleFactor ?? 1;

  var _width = _screenWidth / _pixelRatio;
  var _height = _screenHeight / _pixelRatio;

  // print(
  //     '$_width x $_height - pixelRatio:= $_pixelRatio textScaleFactor:= $_textScaleFactor');

  runApp(
    MyApp(
      size: Size(_width, _height),
      pixelRatio: _pixelRatio,
      textScaleFactor: _textScaleFactor,
      // body: CenterSample(),
      // body: ContainerSample(),
      // body: GradientMagicSample(),
      // body: ColumnSample(),
      // body: ColumnSampleAdvanced(),
      // body: TextSample(),
      // body: IconSample(),
      // body: ButtonSample(),
      // body: ImageSample(),
      // body: ImageWithBorder(),
      // body: SvgSample(),
      // body: DrawSample(),
      // body: CustomPainterSample(),
      // body: TransformSample(),
      // body: StackSample(),
      // body: MediaQuerySample()
      // body: OrientationBuilderSample(),
      // body: MyInheritedSample(),
      // body: FutureBuilderSample(),
      // body: ListViewSample(),
      // body: GridViewSample(),
      // body: GridViewSampleWithPAgeView(),
      // body: SliverViewSample(),
      // body: const StatefullSample(),
      // body: const ListViewStatefullSample(
      //   selected: 2,
      // ),
      // body: const UseBlocSample(),
      // body: const ListViewWithBlocBuilderSample(),
      // body: const BlocBuilder4CubitSample(),
      // body: const GestureSample(),
      // body: const AnimiereContainer(defaultSize: 10),
      // body: const AnimationCtrlSample(),
      // body: const NavigationSampleSimple(),
    ),
  );
}
