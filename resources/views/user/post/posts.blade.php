@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Страница пользователя {{ $user->name }}</div>
                <div class="card-body">
                   <table class="table">
                       <thead>
                           <tr>
                               <th>Заголовок</th>
                               <th>Текст</th>
                               <th>Дата</th>
                               <th>Статус</th>
                           </tr>
                       </thead>
                       <tbody>
                           @foreach ($posts as $post)
                           <tr>
                               <td scope="row">{{$post->title}}</td>
                               <td>{{$post->content}}</td>
                               <td>{{$post->created_at}}</td>
                               <td>@if ($post->confirmed)
                                   Опубликован
                               @else
                                Не Опубликован
                               @endif
                                </td>

                                <td><a name="" id="" class="btn btn-primary" href="{{route('user.post.edit' , ['id' => $post->id])}}" role="button">Изменить</a></td>
                                <td><a name="" id="" class="btn btn-danger" href="{{route('user.post.delete' , ['id' => $post->id])}}" role="button">Удалить</a></td>
                           </tr>
                           @endforeach
                       </tbody>
                   </table>
                   <a id="" class="btn btn-primary" href="{{route('user.post.create')}}" role="button">Добавить</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
