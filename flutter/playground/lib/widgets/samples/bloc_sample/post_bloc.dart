import 'dart:async';
import 'dart:math';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:meta/meta.dart';

part 'post_event.dart';
part 'post_state.dart';

class PostBloc extends Bloc<PostEvent, PostState> {
  PostBloc() : super(PostInitial(selected: 0)) {
    on<PostSetSelectedEvent>((event, emit) {
      // setze den seletieren Post in der Liste
      emit(PostInitial(selected: event.id));
    });
    on<PostNext>((event, emit) {
      emit(PostInitial(selected: state.selected + 1));
    });
    on<PostPrev>((event, emit) {
      emit(PostInitial(selected: max(state.selected - 1, 0)));
    });
  }
}
