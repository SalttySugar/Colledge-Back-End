@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{$user->Name}}</div>
                <div class="card-body">
                    {{$user->firstname}}
                    {{$user->lastname}}
                    {{$user->Role->name}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
