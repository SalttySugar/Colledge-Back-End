@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Страница пользователя {{ $user->name }}</div>
                <div class="card-body">
                    <span>{{ $user->position }}</span>
                    <span>{{ $user->Role->name }}</span> <br/>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
