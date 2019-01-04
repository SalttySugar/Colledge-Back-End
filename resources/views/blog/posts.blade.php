@extends('layouts.app')

@section('content')
<!-- Inner Banner Wrapper Start -->
<div class="inner-banner">
  <div class="container">
    <div class="col-sm-12">
      <h2>Classic News</h2>
    </div>
    <div class="col-sm-12 inner-breadcrumb">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li>News</li>
        <li>Classic News</li>
      </ul>
    </div>
  </div>
</div>
<!-- Inner Banner Wrapper End -->
<section class="inner-wrapper">
  <div class="container">
    <div class="row">
      <div class="inner-wrapper-main news">
        <div class="col-sm-7 col-md-8">
                @foreach ($posts as $post)
            <div class="news-info">
                <div class="news-thumb"> <img src="https://placeholdit.imgix.net/~text?txtsize=80&bg=333&txtclr=cccccc&txt=600%C3%97300&w=600&h=300" alt="News Image"> </div>
                <div class="news-cnt">
                <h3>{{$post->title}}</h3>
                <div class="news-tags">
                    <ul class="time">
                    <li><i class="fa fa-user" aria-hidden="true"></i>Author</li>
                    <li><i class="fa fa-clock-o" aria-hidden="true"></i>{{$post->created_at}}</li>
                    </ul>
                    <ul class="tags pull-right">
                    <li><a href="javascript:void(0)">Education</a></li>
                    <li><a href="javascript:void(0)">News</a></li>
                    <li><a href="javascript:void(0)">University</a></li>
                    </ul>
                </div>
                    {{$post->content}}
                </div>
            </div>
            @endforeach
            <div class="news-pagination">
                <ul class="pagination">
                    <li><a href="#"aria-label="Previous"> <span aria-hidden="true">Назад</span> </a> </li>
                    {{$posts->links()}}
                    <li><a href="#" aria-label="Next"><span aria-hidden="true">Вперед</span></a></li>
                </ul>
            </div>
        </div>
      </div>
      @include('layouts.sidebar');
    </div>
  </div>
</section>
<!-- Call to Action start -->
<div class="call-to-action">
  <div class="container">
    <h3>Lorem Ipsum is simply dummy text</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry.</p>
    <a href="javascript:void(0)">Sign Up</a> </div>
</div>
<!-- Call to Action End -->
@endsection
