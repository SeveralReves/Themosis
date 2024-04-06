@extends('layouts.default')
@section('content')
    <!-- Demo content -->
    @include('components.initial-component', [
        'title' => '{· Severalreves<strong>code</strong>',
        'image' => [
            'url' => themosis_assets() . '/images/severalreves.jpeg',
            'alt' => 'image alt',
        ],
    ])
@endsection
