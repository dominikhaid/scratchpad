part of 'post_cubit.dart';

@immutable
abstract class PostState {
  abstract final int selected;
}

class PostValue extends PostState {
  @override
  final int selected;

  PostValue({required this.selected});
}
