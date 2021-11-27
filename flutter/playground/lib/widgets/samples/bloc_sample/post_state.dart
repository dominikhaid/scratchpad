part of 'post_bloc.dart';

@immutable
abstract class PostState {
  abstract final int selected;
}

class PostInitial extends PostState {
  @override
  final int selected;

  PostInitial({required this.selected});
}
