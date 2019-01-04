@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Создать запись</div>
                <div class="card-body">
                    <form action="{{route('user.post.create')}}" , method="POST">
                        @csrf
                        <div class="form-group">
                          <label for="title">Заголовок</label>
                          <input type="text" name="title" class="form-control" placeholder="Заголовок записи" aria-describedby="helpId">
                          <small id="helpId" class="text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                          <label for="content"></label>
                          <textarea class="form-control" name="content"  rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
