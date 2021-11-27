import 'dart:math';

import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'post_state.dart';

class PostCubit extends Cubit<PostState> {
  PostCubit() : super(PostSetSelected(selected: 0));

  void setSelected(int value) {
    emit(PostSetSelected(selected: value));
  }

  void next() {
    emit(PostSetSelected(selected: min(state.selected + 1, 100)));
  }

  void prev() {
    emit(PostSetSelected(selected: max(state.selected - 1, 0)));
  }
}
