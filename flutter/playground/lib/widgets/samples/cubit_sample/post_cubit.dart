import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'post_state.dart';

class PostCubit extends Cubit<PostState> {
  PostCubit() : super(PostValue(selected: 0));

  void setSelected(int value) {
    emit(PostValue(selected: value));
  }

  void next() {
    emit(PostValue(selected: state.selected + 1));
  }

  void prev() {
    emit(PostValue(selected: max(state.selected - 1, 0)));
  }
}
