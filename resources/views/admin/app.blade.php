<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('_admin/style.css') }}" rel="stylesheet">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.1/tinymce.min.js"></script>-->
</head>
  <body>
    <div id="page">
    </div>

    <script src="{{ asset('_admin/main.js') }}"></script>
  </body>
</html>
